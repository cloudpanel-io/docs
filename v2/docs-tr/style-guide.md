---
id: style-guide
title: Stil Rehberi
sidebar_label: Stil Rehberi
---

[GitHub-flavored Markdown syntax](https://github.github.com/gfm/) kullanarak içerik yazabilirsiniz.

## Markdown Sözdizimi

Markdown tabanlı Docusaurus sitelerini tasarlarken örnek bir sayfa olarak hizmet eder.

## Başlıklar

# H1 - En iyi dokümantasyonu oluşturun

## H2 - En iyi dokümantasyonu oluşturun

### H3 - En iyi dokümantasyonu oluşturun

#### H4 - En iyi dokümantasyonu oluşturun

##### H5 - En iyi dokümantasyonu oluşturun

###### H6 - En iyi dokümantasyonu oluşturun

---

## Vurgulamalar

Vurgu, yani italik yazı, _yıldızlar_ veya _alt çizgiler_ ile yapılır.

Güçlü vurgu, yani kalın yazı, **yıldızlar** veya **alt çizgiler** ile yapılır.

Birleşik vurgu, **yıldızlar ve _alt çizgiler_** ile yapılır.

Üstü çizili yazı için iki tilde kullanılır. ~~Bunu çiz.~~

---

## Listeler

1. İlk sıralı liste öğesi
1. Diğer bir öğe ⋅⋅\* Sırasız alt liste.
1. Gerçek sayılar önemli değil, yalnızca bir sayı olması yeterli ⋅⋅1. Sıralı alt liste
1. Ve başka bir öğe.

⋅⋅⋅Liste öğeleri içinde düzgün girintili paragraflar oluşturabilirsiniz. Üstteki boş satıra ve önde gelen boşluklara dikkat edin (en az bir tane, ancak burada üç kullanacağız).

⋅⋅⋅Bir satır sonu oluşturmak için bir paragraf kullanmadan iki boşluk bırakmanız gerekir.⋅⋅ ⋅⋅⋅Bu satır ayrı bir satırdır, ancak aynı paragraftadır.⋅⋅ ⋅⋅⋅(Bu, tipik GFM satır sonu davranışının aksine, burada boşluklar gereklidir.)

- Sırasız liste yıldızlarla yapılabilir

* Veya eksi işaretiyle

- Ya da artı işaretiyle

---

## Bağlantılar

[Ben bir satır içi bağlantıyım](https://www.google.com)

[Ben başlıklı bir satır içi bağlantıyım](https://www.google.com "Google'ın Ana Sayfası")

[Referans tarzı bir bağlantıyım][arbitrary case-insensitive reference text]

[Referans tarzı bağlantı tanımlamaları için numaralar kullanabilirsiniz][1]

Ya da boş bırakabilir ve [bağlantı metnini] kullanabilirsiniz.

URL'ler ve açılı parantez içindeki URL'ler otomatik olarak bağlantıya dönüştürülür. http://www.example.com veya <http://www.example.com> ve bazen example.com (ancak örneğin GitHub'da değil).

Bazı metinler, referans bağlantıların daha sonra takip edilebileceğini göstermek için.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

---

## Görseller

İşte logomuz (başlık metni görmek için üzerine gelin):

Satır içi stil: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Başlık Metni 1')

Referans tarzı: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Başlık Metni 2'

---

## Kod

```python
s = "Python sözdizimi vurgusu"
print(s)
```

```
Dil belirtilmedi, bu yüzden sözdizimi vurgusu yok.
Ama hadi içine bir <b>etiket</b> ekleyelim.
```

```js {2}
function highlightMe() {
  console.log('Bu satır vurgulanabilir!');
}
```

---

## Tablolar

Sütunları hizalamak için iki nokta üst üste kullanılabilir.

| Tablolar     | Harika        | Evet    |
| ------------ | :-----------: | ------: |
| 3. sütun     | sağa hizalı   | \$1600  |
| 2. sütun     |    ortalı    |    \$12 |
| zebra çizgisi|   harika      |     \$1 |

En az 3 çizgi her bir başlık hücresini ayırmalıdır. Dış borular (|) isteğe bağlıdır ve ham Markdown'ın güzel bir şekilde hizalanması gerekmez. Ayrıca satır içi Markdown kullanabilirsiniz.

| Markdown  | Daha Az  | Güzel     |
| --------- | -------- | --------- |
| _Hala_    | `işler`  | **güzel** |
| 1         | 2        | 3         |

---

## Alıntılar

> Alıntılar, e-postalarda yanıt metnini taklit etmek için çok kullanışlıdır. Bu satır aynı alıntının bir parçasıdır.

Alıntı sonu.

> Bu çok uzun bir satır ve sarıldığında hala düzgün bir şekilde alıntılanacaktır. Hadi bu satırın herkes için yeterince uzun olduğundan emin olalım. Ah, alıntının içine **Markdown** koyabilirsiniz.

---

## Satır İçi HTML

<dl>
  <dt>Tanım listesi</dt>
  <dd>Bazen insanların kullandığı bir şeydir.</dd>

  <dt>HTML'de Markdown</dt>
  <dd>*çok* iyi **çalışmaz**. HTML <em>etiketlerini</em> kullanın.</dd>
</dl>

---

## Satır Sonları

İşte başlamak için bir satır.

Bu satır yukarıdaki satırdan iki yeni satırla ayrılmıştır, bu yüzden _ayrı bir paragraftır_.

Bu satır da ayrı bir paragraftır, ancak... Bu satır yalnızca bir yeni satırla ayrılmıştır, bu yüzden _aynı paragrafta_ ayrı bir satırdır.

---

## Uyarılar

:::note
Bu bir not
:::

:::tip
Bu bir ipucu
:::

:::important
Bu önemli
:::

:::caution
Bu bir uyarı
:::

:::warning
Bu bir uyarıdır
:::
