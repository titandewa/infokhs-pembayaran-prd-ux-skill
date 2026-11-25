"use strict";

// Data item pembayaran UKT
var ITEMS = [
  { id: "her", name: "HER", price: 2900000 },
  { id: "uts", name: "UTS", price: 2900000 }
];
var BANKS = ["Bank BNI", "Bank BRI", "Bank Mandiri"];
var VA_EXAMPLE = "1234 5678 9012 3456"; // contoh, bukan nomor asli
var KEY = "infokhs-ukt-state";

// Pilihan dibawa antar halaman lewat sessionStorage.
function load() {
  try {
    var raw = sessionStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* abaikan */ }
  return { selected: {}, bank: "" };
}
function save() {
  try { sessionStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* abaikan */ }
}
var state = load();

function rupiah(n) {
  return "Rp " + new Intl.NumberFormat("id-ID").format(n);
}
function $(id) { return document.getElementById(id); }
function el(tag, cls, text) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

// Total dihitung dari item yang terpilih, jadi menekan item berulang
// tidak pernah menambah nominal (maksimal Rp 5.800.000).
function selectedItems() {
  return ITEMS.filter(function (i) { return state.selected[i.id]; });
}
function total() {
  return selectedItems().reduce(function (s, i) { return s + i.price; }, 0);
}

var kind = document.body.getAttribute("data-page");

function renderRows(listEl, withRemove) {
  listEl.textContent = "";
  selectedItems().forEach(function (i) {
    var li = el("li");
    li.appendChild(el("span", "", i.name + " · " + rupiah(i.price)));
    if (withRemove) {
      var b = el("button", "rm", "Hapus");
      b.type = "button";
      b.setAttribute("aria-label", "Hapus " + i.name + " dari daftar");
      b.addEventListener("click", function () {
        delete state.selected[i.id];
        save();
        setStatus(i.name + " dihapus dari daftar.");
        render(i.id);
      });
      li.appendChild(b);
    }
    listEl.appendChild(li);
  });
}

function setStatus(msg) {
  var s = $("status");
  if (s) s.textContent = msg;
}

function buildItems() {
  var ul = $("items");
  ul.textContent = "";
  ITEMS.forEach(function (i) {
    var li = el("li");
    var b = el("button", "item");
    b.type = "button";
    b.id = "item-" + i.id;
    var info = el("span");
    info.appendChild(el("span", "name", i.name));
    info.appendChild(el("span", "price", rupiah(i.price)));
    b.appendChild(info);
    b.appendChild(el("span", "tag", "Pilih"));
    b.addEventListener("click", function () {
      if (state.selected[i.id]) {
        setStatus(i.name + " sudah terpilih. Nominal tidak berubah.");
      } else {
        state.selected[i.id] = true;
        save();
        setStatus(i.name + " dipilih.");
      }
      render(i.id);
    });
    li.appendChild(b);
    ul.appendChild(li);
  });
}

function render(focusId) {
  $("total").textContent = rupiah(total());
  var count = selectedItems().length;

  if (kind === "select") {
    if (!$("item-her")) buildItems();
    ITEMS.forEach(function (i) {
      var b = $("item-" + i.id);
      var on = !!state.selected[i.id];
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.lastChild.textContent = on ? "Terpilih" : "Pilih";
    });
    renderRows($("selected-list"), true);
    $("selected-empty").hidden = count > 0;
    $("btn-next").disabled = count < 2;
    $("next-hint").textContent = count < 2
      ? "Pilih HER dan UTS untuk melanjutkan."
      : "HER dan UTS sudah dipilih.";
    if (focusId) $("item-" + focusId).focus();
  } else if (kind === "confirm") {
    renderRows($("confirm-list"), false);
    var names = selectedItems().map(function (i) { return i.name; }).join(" dan ");
    $("confirm-note").textContent = "Pilihan Anda: " + names + ", masing-masing satu kali.";
  } else if (kind === "bank") {
    var ul = $("banks");
    ul.textContent = "";
    BANKS.forEach(function (name) {
      var li = el("li");
      var b = el("button", "item");
      b.type = "button";
      b.appendChild(el("span", "name", name));
      b.addEventListener("click", function () {
        state.bank = name;
        save();
        window.location.href = "nomor-va.html";
      });
      li.appendChild(b);
      ul.appendChild(li);
    });
  } else if (kind === "va") {
    $("va-bank").textContent = state.bank;
    $("va-number").textContent = VA_EXAMPLE;
    renderRows($("va-list"), false);
  }
}

function wire() {
  var next = $("btn-next");
  var back = $("btn-back");
  if (next) {
    next.addEventListener("click", function () {
      if (kind === "select") window.location.href = "konfirmasi.html";
      else if (kind === "confirm") window.location.href = "pilih-bank.html";
      else if (kind === "va") {
        state = { selected: {}, bank: "" };
        save();
        window.location.href = "index.html";
      }
    });
  }
  if (back) {
    back.addEventListener("click", function () {
      window.location.href = kind === "bank" ? "konfirmasi.html" : "index.html";
    });
  }
}

// Penjaga alur: arahkan ke halaman yang sesuai bila dibuka langsung.
var ok = true;
if ((kind === "confirm" || kind === "bank" || kind === "va") && selectedItems().length < 2) {
  window.location.replace("index.html"); ok = false;
} else if (kind === "va" && !state.bank) {
  window.location.replace("pilih-bank.html"); ok = false;
}
if (ok) {
  render();
  wire();
}
