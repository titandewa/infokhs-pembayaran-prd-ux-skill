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

// Halaman pemilihan mengikuti jumlah item yang sudah dipilih.
function selectPage() {
  var n = selectedItems().length;
  if (n === 0) return "index.html";
  if (n === 1) return "item-terpilih.html";
  return "daftar-item.html";
}

var body = document.body;
var kind = body.getAttribute("data-page");
var file = body.getAttribute("data-file");

function go(target) {
  if (target === file) render();
  else window.location.href = target;
}

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
        go(selectPage());
      });
      li.appendChild(b);
    }
    listEl.appendChild(li);
  });
}

function renderItems() {
  var ul = $("items");
  ul.textContent = "";
  ITEMS.forEach(function (i) {
    var li = el("li");
    var on = !!state.selected[i.id];
    var b = el("button", "item");
    b.type = "button";
    b.setAttribute("aria-pressed", on ? "true" : "false");
    var info = el("span");
    info.appendChild(el("span", "name", i.name));
    info.appendChild(el("span", "price", rupiah(i.price)));
    b.appendChild(info);
    b.appendChild(el("span", "tag", on ? "Terpilih" : "Pilih"));
    b.addEventListener("click", function () {
      state.selected[i.id] = true; // tekan lagi tidak menambah nominal
      save();
      go(selectPage());
    });
    li.appendChild(b);
    ul.appendChild(li);
  });
}

function init() {
  var count = selectedItems().length;

  // Penjaga alur: arahkan ke halaman yang sesuai bila dibuka langsung.
  if (kind === "select" && file !== selectPage()) { window.location.replace(selectPage()); return false; }
  if ((kind === "confirm" || kind === "bank" || kind === "va") && count < 2) { window.location.replace(selectPage()); return false; }
  if (kind === "va" && !state.bank) { window.location.replace("pilih-bank.html"); return false; }
  return true;
}

function render() {
  $("total").textContent = rupiah(total());
  var count = selectedItems().length;

  if (kind === "select") {
    if (count === 1) {
      $("select-hint").textContent = selectedItems()[0].name +
        " sudah terpilih. Menekan item yang sama lagi tidak menambah nominal. Pilih item lainnya untuk melanjutkan.";
    }
    renderItems();
    renderRows($("selected-list"), true);
    $("selected-empty").hidden = count > 0;
    $("btn-next").disabled = count < 2;
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
      window.location.href = kind === "bank" ? "konfirmasi.html" : "daftar-item.html";
    });
  }
}

if (init()) {
  render();
  wire();
}
