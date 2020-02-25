<script type="text/javascript">
//<![CDATA[
/* Script Dont Need to Refresh */
var get_result_html = document.getElementById('results').innerHTML;
document.getElementById('default-save').innerHTML = get_result_html;
$(document).on('click','#reset-html', function(){
var set_result_html = document.getElementById('default-save').innerHTML;
document.getElementById('results').innerHTML = set_result_html;
$('#results').hide();
});

function angkaToRp(angka) {
    var rupiah = '';    
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
              return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    };

$(document).on('click','#tambah-gambar', function(){
  var $btn = $(this);
  var count = ($btn.data("click_count") || 0) + 1;
  $btn.data("click_count", count);
  var text = $('#results code').text();
    if (count == 1){
        var new_text = text.replace(/-gambar3-/g,'\n<li><img src="-linkgambar3-" alt="-thisjudul-"/></li>
');
        $('.tambah-img').append('<input id="formgambar3" placeholder="URL Gambar Produk 3" value="" type="text"/>');
    }
    else if (count == 2){
        var new_text = text.replace(/-gambar4-/g,'\n
<li><img src="-linkgambar4-" alt="-thisjudul-"/></li>
');
        $('.tambah-img').append('<input id="formgambar4" placeholder="URL Gambar Produk 4" value="" type="text"/>');
    }
    else if (count == 3){
        var new_text = text.replace(/-gambar5-/g,'\n
<li><img src="-linkgambar5-" alt="-thisjudul-"/></li>
');
        $('.tambah-img').append('<input id="formgambar5" placeholder="URL Gambar Produk 5" value="" type="text"/>');
    }
    $('#results code').text(new_text);
});

$(document).on('click','#request-code', function(){
var text = $('#results code').text();
var konten_title = $('#formtitle').val();
var konten_img1 = $('#formgambar1').val();
var konten_img2 = $('#formgambar2').val();
var konten_img3 = $('#formgambar3').val();
var konten_img4 = $('#formgambar4').val();
var konten_img5 = $('#formgambar5').val();

var kontenmin = $('#formmin').val();
var kontenmax = $('#formmax').val();
var kontenopsi1 = $('#form-opsi1').val();
var kontenopsi2 = $('#form-opsi2').val();

var listopsi1 = $('#form-list-opsi1').val();
var listopsi2 = $('#form-list-opsi2').val();
var listopsi3 = $('#form-list-opsi3').val();
var listopsi4 = $('#form-list-opsi4').val();

var list2opsi1 = $('#form-list2-opsi1').val();
var list2opsi2 = $('#form-list2-opsi2').val();
var list2opsi3 = $('#form-list2-opsi3').val();
var list2opsi4 = $('#form-list2-opsi4').val();

var kontendesc = document.getElementById("product-desc").value;
var hargaval = $('#formharga').val();
var diskon =  $('#formdiskon').val();
console.log(hargaval);
console.log(diskon);
var hitungdiskon = (Math.round(((hargaval * diskon)/100)));
var hasildiskon = (Math.round(((hargaval - hitungdiskon))));

var replaced = text
.replace(/-thisjudul-/g, konten_title)
.replace(/-linkgambar1-/g, konten_img1)
.replace(/-linkgambar2-/g, konten_img2)
.replace(/-linkgambar3-/g, konten_img3)
.replace(/-linkgambar4-/g, konten_img4)
.replace(/-linkgambar5-/g, konten_img5)

.replace(/-gambar3-/g, '')
.replace(/-gambar4-/g, '')
.replace(/-gambar5-/g, '')

.replace(/-opsi11-/g, '')
.replace(/-opsi12-/g, '')
.replace(/-opsi13-/g, '')

.replace(/-opsi21-/g, '')
.replace(/-opsi22-/g, '')
.replace(/-opsi23-/g, '')

.replace(/-promin-/g, kontenmin)
.replace(/-promax-/g, kontenmax)

.replace(/-varian-/g, kontenopsi1)
.replace(/-ukuran-/g, kontenopsi2)

.replace(/-warna-/g, listopsi1)
.replace(/-warna2-/g, listopsi2)
.replace(/-warna3-/g, listopsi3)
.replace(/-warna4-/g, listopsi4)

.replace(/-medium-/g, list2opsi1)
.replace(/-medium2-/g, list2opsi2)
.replace(/-medium3-/g, list2opsi3)
.replace(/-medium4-/g, list2opsi4)

.replace(/-deskripsi-/g, kontendesc)

.replace(/-promo-/g, '')
.replace(/-terlaris-/g, '')
.replace(/-stokhabis-/g, '')
.replace(/-diskonmuncul-/g, '')
.replace(/-strikemuncul-/g, '')

.replace(/-hargaasli-/g, hasildiskon)
.replace(/-hargarp-/g, angkaToRp(hargaval))
.replace(/-diskon-/g, diskon)
.replace(/-hargadiskon-/g, angkaToRp(hasildiskon));

$('#results code').text(replaced);
$('#results').slideToggle('normal');
});

$(document).on('click','#add-promo', function(){
    var text = $('#results code').text();
    $(this).toggleClass('aktif');
    var new_text = text.replace(/-promo-/g, '\n<div class="promo">
Promo</div>
');
    $('#results code').text(new_text);
});

$(document).on('click','#add-laris', function(){
    var text = $('#results code').text();
    $(this).toggleClass('aktif');
    var new_text = text.replace(/-terlaris-/g, '\n<div class="produk-terlaris">
Terlaris</div>
');
    $('#results code').text(new_text);
});

$(document).on('click','#add-habis', function(){
    var text = $('#results code').text();
    $(this).toggleClass('aktif');
    var new_text = text.replace(/-stokhabis-/g, '\n<div class="stok-habis">
Stok Habis</div>
');
    $('#results code').text(new_text);
});

$(document).on('click','#add-diskon', function(){
    var text = $('#results code').text();
    $(this).toggleClass('aktif');
    $('#diskon-wrap').toggleClass('aktif');
    var new_text = text.replace(/-diskonmuncul-/g, '\n<div class="discount">
--diskon-%</div>
').replace(/-strikemuncul-/g, '\n<strike>-hargarp-</strike><br/>');
    $('#results code').text(new_text);
});

$(document).on('click','#add-list1', function(){
    var $btn = $(this);
    var count = ($btn.data("click_count") || 0) + 1;
    $btn.data("click_count", count);
    var text = $('#results code').text();
      if (count == 1){
          var new_text = text.replace(/-opsi11-/g,'\n<option value="2">-warna2-</option>');
          $('.tambah-opsi1').append('<input id="form-list-opsi2" placeholder="List Opsi 2" value="" type="text"/>');
      }
      else if (count == 2){
          var new_text = text.replace(/-opsi12-/g,'\n<option value="3">-warna3-</option>');
          $('.tambah-opsi1').append('<input id="form-list-opsi3" placeholder="List Opsi 3" value="" type="text"/>');
      }
      else if (count == 3){
          var new_text = text.replace(/-opsi13-/g,'\n<option value="4">-warna4-</option>');
          $('.tambah-opsi1').append('<input id="form-list-opsi4" placeholder="List Opsi 4" value="" type="text"/>');
      }
      $('#results code').text(new_text);
  });

  $(document).on('click','#add-list2', function(){
    var $btn = $(this);
    var count = ($btn.data("click_count") || 0) + 1;
    $btn.data("click_count", count);
    var text = $('#results code').text();
      if (count == 1){
          var new_text = text.replace(/-opsi21-/g,'\n<option value="2">-medium2-</option>');
          $('.tambah-opsi2').append('<input id="form-list2-opsi2" placeholder="List Opsi 2" value="" type="text"/>');
      }
      else if (count == 2){
          var new_text = text.replace(/-opsi22-/g,'\n<option value="3">-medium3-</option>');
          $('.tambah-opsi2').append('<input id="form-list2-opsi3" placeholder="List Opsi 3" value="" type="text"/>');
      }
      else if (count == 3){
          var new_text = text.replace(/-opsi23-/g,'\n<option value="4">-medium4-</option>');
          $('.tambah-opsi2').append('<input id="form-list2-opsi4" placeholder="List Opsi 4" value="" type="text"/>');
      }
      $('#results code').text(new_text);
  });

//Pre Auto Selection
$('i[rel="pre"]').replaceWith(function() {
    return $('<pre><code>' + $(this).html() + '</code></pre>
');
});
var pres = document.querySelectorAll('pre,kbd,blockquote');
for (var i = 0; i < pres.length; i++) {
  pres[i].addEventListener("dblclick", function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
}
//]]>
</script>