// BU DOSYA SÜREKLİ GÜNCELLENECEK OLAN VERİ DOSYASIDIR.
// Yeni veri geldiğinde sadece bu dosyadaki ilgili listenin altına ekleme yapılır.

window.COURSE_DATA = {
    // BÖLÜM 1: ÇÖZÜMLÜ SORULAR
    questions: [
        {
            id: "q_superposition_1",
            topic: "Süperpozisyon Teoremi",
            title: "Süperpozisyon Algoritması ve Lineerlik",
            isAudioContent: true, // Ses kaydından gelen veri
            originalText: "\"Lineer bir devredeki bağımsız akım ve gerilim kaynaklarının... etkisinin cebirsel toplamına eşittir.\"",
            summary: "Süperpozisyon teoreminin uygulanabilmesi için ön koşul ve adım adım algoritma.",
            steps: [
                "ÖN KOŞUL (Yeni Kayıt): Devre 'Lineer' olmalıdır (Örn: V=I*R bağıntısı).",
                "ADIM 1: Her seferinde sadece 1 bağımsız kaynak aktif bırakılır.",
                "ADIM 2: Diğer Gerilim Kaynakları -> KISA DEVRE (Düz Tel/0V) yapılır.",
                "ADIM 3: Diğer Akım Kaynakları -> AÇIK DEVRE (Kopuk Tel/0A) yapılır.",
                "ADIM 4: Bağımlı Kaynaklara (Baklava dilimi) ASLA dokunulmaz.",
                "ADIM 5: Her kaynağın etkisi ayrı ayrı hesaplanır ve toplanır."
            ],
            audioNote: "Hoca 2. kayıtta 'Lineerlik' şartını vurguladı. Güç hesabı lineer olmadığı için bu yöntemle yapılamaz."
        },
        {
            id: "q_node_1",
            topic: "Düğüm Analizi",
            title: "Muhtemel Sınav Sorusu (PDF Sayfa 6)",
            isAudioContent: false,
            originalText: "Verilen devrede düğüm gerilimleri yöntemi ile V1 ve V2 gerilimlerini bulunuz.",
            summary: "PDF Sayfa 6'daki klasik düğüm gerilimleri sorusu.",
            steps: [
                "1. Düğüm denklemleri yazılır: -50 + 30(Ia - Ib) + 50(Ia - Ic) = 0",
                "2. Matris formuna getirilir.",
                "3. İşaret hatası yapmamaya dikkat edilir."
            ],
            audioNote: "PDF üzerinde 'Sınavda çıkabilir' notu var."
        },
        {
            id: "q_rl_1",
            topic: "RL Devreleri",
            title: "Bobin Deşarjı (Garanti Soru)",
            isAudioContent: false,
            originalText: "10 mH bobin, 1 Ohm direnç, t=0 anında I=4A. Zaman sabiti ve akım fonksiyonunu bulun.",
            summary: "Bobin deşarj devresinde parametre hesabı.",
            steps: [
                "1. Zaman Sabiti (τ) = L/R = 0.01 / 1 = 0.01 sn",
                "2. Formül: i(t) = I₀ * e^(-t/τ)",
                "3. Sonuç: i(t) = 4 * e^(-100t) A"
            ],
            audioNote: "Hoca: 'Bunu not alın, kesin gelir.'"
        },
        {
            id: "q_thevenin_methods",
            topic: "Thevenin Teoremi",
            title: "Eşdeğer Devre Bulma Metotları (Ses Kaydı 3)",
            isAudioContent: true,
            originalText: "\"Thevenin eşdeğer devresini elde etmek için 3 metod kullanacağız... 1. metod sadece bağımsız kaynaklar...\"",
            summary: "Hoca, devre tipine göre (bağımlı kaynak var mı yok mu?) 3 farklı Thevenin çözme yöntemi dikte ettirdi.",
            steps: [
                "METOD 1 (Sadece Bağımsız Kaynaklar): Kaynakları söndür (V=Kısa, I=Açık). Eşdeğer direnci ($R_{th}$) doğrudan hesapla.",
                "METOD 2 (Genel Yöntem): Bağımlı kaynaklara DOKUNMA. Açık devre gerilimi ($V_{oc}$) ve Kısa devre akımını ($I_{sc}$) bul. Formül: $R_{th} = V_{oc} / I_{sc}$.",
                "METOD 3 (Test Kaynağı): Tüm bağımsız kaynakları söndür. Uçlara $1V$ veya $1A$ test kaynağı bağla. $R_{th} = V_{test} / I_{test}$."
            ],
            audioNote: "Hoca özellikle 2. metodun hem bağımlı hem bağımsız kaynak içeren devrelerde kullanıldığını vurguladı."
        },
        {
            id: "q_thevenin_algorithm",
            topic: "Thevenin Teoremi",
            title: "5 Adımda Thevenin (Dikte Edilen)",
            isAudioContent: true,
            originalText: "\"1. Devre parçası kaldırılır. 2. Düğümler işaretlenir. 3. Kaynaklar susturulup $R_{th}$ bulunur. 4. Kaynaklar varken $V_{th}$ bulunur. 5. Eşdeğer devre çizilir.\"",
            summary: "Hocanın sınavda adım adım uygulamanızı istediği standart Thevenin prosedürü.",
            steps: [
                "ADIM 1: Üzerinde işlem yapılacak parça (örn: $R_L$) geçici olarak sökülür.",
                "ADIM 2: Açık kalan uçlar (düğümler) mutlaka işaretlenir (A ve B deyin). *Hoca burayı özellikle vurguladı.*",
                "ADIM 3: $R_{th}$ (Eşdeğer Direnç): Tüm kaynaklar öldürülür ($V$=Kısa, $I$=Açık) ve eşdeğer direnç hesaplanır.",
                "ADIM 4: $V_{th}$ (Eşdeğer Gerilim): Kaynaklar tekrar açılır. A-B uçları arasındaki gerilim hesaplanır.",
                "ADIM 5: Sonuç: $V_{th}$ ve $R_{th}$ seri bağlanır, 1. adımda sökülen parça geri takılır."
            ],
            audioNote: "Hoca 2. madde için 'Bu, karmaşık devrelerde karışıklığın önlenmesi için önemlidir' uyarısını yaptı."
        },
        {
            id: "q_norton_steps",
            topic: "Norton Teoremi",
            title: "Norton Uygulama Algoritması (5 Adım)",
            isAudioContent: true,
            originalText: "\"Norton için de 5 maddelik prosedürü yazın. Thevenin'den tek farkı 4. maddedir...\"",
            summary: "Hocanın dikte ettirdiği Norton eşdeğer devresi bulma adımları.",
            steps: [
                "ADIM 1: İlgili devre parçası (Yük/RL) sökülür.",
                "ADIM 2: Düğümler (A ve B) işaretlenir.",
                "ADIM 3: $R_N$ (Norton Direnci): Kaynaklar öldürülür. Eşdeğer direnç bulunur. (Not: $R_N = R_{th}$'dir).",
                "ADIM 4: $I_N$ (Norton Akımı): Kaynaklar aktifleştirilir. A-B uçları KISA DEVRE (Düz Tel) yapılır ve oradan geçen akım ($I_{sc}$) hesaplanır.",
                "ADIM 5: Norton eşdeğer devresi çizilir (Akım kaynağına PARALEL direnç)."
            ],
            audioNote: "Hoca, Thevenin ile Norton direncinin bulunuşunun birebir aynı olduğunu, farkın sadece Vth (Açık Devre) yerine In (Kısa Devre) bulunması olduğunu belirtti."
        },
        {
            id: "q_norton_example_1",
            topic: "Norton Teoremi",
            title: "Norton Eşdeğeri Hesaplama (PDF Sayfa 22)",
            isAudioContent: true,
            originalText: "10A akım kaynağı, 2 ohm ve 3 ohm dirençlerden oluşan devrenin Norton eşdeğerini bulunuz.",
            summary: "Kaydın ikinci yarısında çözülen, kaynak dönüşümü kullanılarak basitleştirilen örnek.",
            steps: [
                "1. $R_N$ Hesabı: 10A kaynağı AÇIK DEVRE yapılır. 2Ω ve 3Ω seri olur. $R_N = 2 + 3 = 5\\Omega$.",
                "2. $I_N$ Hesabı için Kaynak Dönüşümü: 10A ve 3Ω paralel -> 30V ve 3Ω seri kaynağa dönüşür.",
                "3. Yeni Devre: 30V kaynak, 3Ω ve 2Ω dirençler seri hale gelir.",
                "4. Kısa Devre Akımı: $I_N = V / R_{top} = 30 / (3+2) = 6A$.",
                "5. Sonuç: 6A akım kaynağına paralel 5Ω direnç."
            ],
            audioNote: "Bu soruda 'Kaynak Dönüşümü' (Source Transformation) tekniği pratik yol olarak kullanıldı."
        },
        {
            id: "q_superposition_def_rec6",
            topic: "Süperpozisyon Teoremi",
            title: "Teorem Tanımı (Ses Kaydı 6 - Dikte)",
            isAudioContent: true,
            originalText: "\"Lineer bir devredeki bağımsız akım ve gerilim kaynaklarının, devredeki herhangi bir eleman üzerinde oluşturdukları akım ve gerilim etkileri; kaynakların ayrı ayrı devre elemanı üzerindeki etkisinin cebirsel toplamına eşittir.\"",
            summary: "Hocanın kelime kelime yazdırdığı ve sınavda tanım olarak sorulabilecek resmi Süperpozisyon tanımı.",
            steps: [
                "Anahtar Kelime 1: Devre 'Lineer' olmalıdır.",
                "Anahtar Kelime 2: Kaynakların etkisi 'Ayrı Ayrı' hesaplanır.",
                "Anahtar Kelime 3: Sonuçlar 'Cebirsel Toplam' (yönlere dikkat edilerek) ile birleştirilir."
            ],
            audioNote: "Hoca bu tanımı yavaşça ve tekrarlayarak yazdırdı, sınavda sözel soru olarak gelme ihtimali yüksek."
        },
        {
            id: "q_superposition_rules_rec6",
            topic: "Süperpozisyon Teoremi",
            title: "Uygulama Kuralları (3 Madde)",
            isAudioContent: true,
            originalText: "\"1. Her adımda sadece 1 kaynak aktif. 2. Diğerleri kapatılır (0 yapılır). 3. Bağımlı kaynaklara dokunulmaz.\"",
            summary: "Teoremi uygularken hata yapmamak için hocanın yazdırdığı 3 altın kural.",
            steps: [
                "MADDE 1: Her adımda devrede SADECE 1 adet bağımsız kaynak aktif bırakılır.",
                "MADDE 2 (Kapatma Kuralı): Diğer bağımsız kaynaklar öldürülür. Gerilim Kaynağı -> KISA DEVRE ($V=0$, Düz Tel). Akım Kaynağı -> AÇIK DEVRE ($I=0$, Kopuk Tel).",
                "MADDE 3 (Kritik): Bağımlı kaynaklara (baklava dilimi) ASLA dokunulmaz, devrede aynen kalırlar."
            ],
            audioNote: "Hoca özellikle 2. maddedeki 'Kısa Devre / Açık Devre' ayrımını ve 3. maddedeki 'Bağımlı Kaynak' uyarısını vurguladı."
        },
        {
            id: "q_rl_theory_rec7",
            topic: "RL Devreleri",
            title: "Bobin Deşarjı (Doğal Tepki) Teorisi",
            isAudioContent: true,
            originalText: "\"Önceden şarj edilmiş bir bobinin, kaynak kesildikten sonra üzerindeki enerjiyi direnç üzerinden boşaltmasıdır.\"",
            summary: "RL devrelerinin diferansiyel denklemden gelen temel çalışma mantığı.",
            steps: [
                "1. BAŞLANGIÇ: $t<0$ anında bobin bir kaynak tarafından şarj edilmiştir ($I_0$ akımı vardır).",
                "2. OLAY: $t=0$ anında kaynak devreden çıkar.",
                "3. DENKLEM: $L \\frac{di}{dt} + Ri = 0$ diferansiyel denklemi kurulur.",
                "4. ÇÖZÜM: $i(t) = I_0 \\cdot e^{-t/\\tau}$ (Üstel azalan akım).",
                "5. ZAMAN SABİTİ (KRİTİK): $\\tau = \\frac{L}{R}$ saniyedir. (Dikkat: RC devresiyle karıştırmayın!)"
            ],
            audioNote: "Hoca formülün ezberlenmesi yerine mantığının (enerji boşalması) anlaşılmasını istiyor."
        },
        {
            id: "q_rl_example_rec7",
            topic: "RL Devreleri",
            title: "Anahtarlamalı Soru Çözümü (12V Kaynak)",
            isAudioContent: true,
            originalText: "12V kaynak, 4$\\Omega$ ve 10$\\Omega$ direnç, 0.1H bobin. t=0 anında anahtar açılıyor (kaynak gidiyor). i(t) ve v(t) nedir?",
            summary: "Hocanın 'Sınavda bu mantıkla gelir' dediği anahtarlamalı soru tipi.",
            steps: [
                "ADIM 1 ($t < 0$ Kararlı Durum): Anahtar kapalı. Bobin DC kaynakta KISA DEVRE (Düz tel) davranır. 10$\\Omega$ direnç kısa devre olur (akım geçmez). $I_0 = 12V / 4\\Omega = 3A$.",
                "ADIM 2 ($t > 0$ Deşarj): Anahtar açıldı, kaynak gitti. Bobin (0.1H) ve 10$\\Omega$ direnç baş başa kaldı.",
                "ADIM 3 (Zaman Sabiti): $\\tau = L/R = 0.1 / 10 = 0.01$ saniye.",
                "ADIM 4 (Akım): $i(t) = 3 \\cdot e^{-t/0.01} = 3e^{-100t} A$.",
                "ADIM 5 (Gerilim): $v(t) = L \\cdot \\frac{di}{dt} = 0.1 \\cdot (-300e^{-100t}) = -30e^{-100t} V$."
            ],
            audioNote: "Bobin akımının yönüne ve gerilimin eksi çıkmasına (türevden dolayı) dikkat edin."
        },
        {
            id: "q_norton_def_rec_tanim",
            topic: "Norton Teoremi",
            title: "Teorem Tanımı (Ses Kaydı: Norton Tanım)",
            isAudioContent: true,
            originalText: "\"İki uçlu, lineer, direnç ve kaynaklardan oluşan herhangi bir devre; bir akım kaynağı ($I_N$) ve ona paralel bağlı bir direnç ($R_N$) haline getirilebilir.\"",
            summary: "Hocanın Norton teoremi için yaptığı temel tanım ve eşdeğer devre yapısı.",
            steps: [
                "1. AMAÇ: Karmaşık devreyi tek bir kaynak ve direnç ile modellemek.",
                "2. YAPI: Norton eşdeğer devresi HER ZAMAN bir Akım Kaynağı ve ona PARALEL bir dirençten oluşur.",
                "3. FARK: Thevenin'de seri direnç varken, Norton'da paralel direnç vardır."
            ],
            audioNote: "Hoca, 'Paralel' kelimesini özellikle vurguladı. Seri çizerseniz Thevenin olur, yanlış olur."
        },
        {
            id: "q_norton_in_finding",
            topic: "Norton Teoremi",
            title: "$I_N$ (Norton Akımı) Nasıl Bulunur?",
            isAudioContent: true,
            originalText: "\"Uçları kısa devre yapacaksınız ve o telden geçen akımı hesaplayacaksınız. Bu akım $I_{sc}$ yani $I_N$'dir.\"",
            summary: "Norton akım kaynağının değerini bulmak için yapılması gereken işlem (Kısa Devre Yöntemi).",
            steps: [
                "ADIM 1: Devrenin çıkış uçları (A ve B) bir düz tel ile birleştirilir (Kısa Devre).",
                "ADIM 2: Bu kısa devre telinden geçen akım ($I_{sc}$) hesaplanır.",
                "ADIM 3: Bulunan bu akım değeri, Norton Akım Kaynağının ($I_N$) değeridir."
            ],
            audioNote: "Dikkat: Kısa devre yapılan kolun paralelindeki dirençler devre dışı kalır (Akım dirençsiz yolu seçer)."
        },
        {
            id: "q_norton_rn_finding",
            topic: "Norton Teoremi",
            title: "$R_N$ (Norton Direnci) Nasıl Bulunur?",
            isAudioContent: true,
            originalText: "\"Norton direnci, Thevenin direnci ile tamamen aynıdır. Kaynakları öldürüp eşdeğer direnç bulacaksınız.\"",
            summary: "Eşdeğer direnç bulma prosedürü.",
            steps: [
                "ADIM 1: Bağımsız Gerilim kaynakları KISA DEVRE (Düz tel/$0V$) yapılır.",
                "ADIM 2: Bağımsız Akım kaynakları AÇIK DEVRE (Kopuk tel/$0A$) yapılır.",
                "ADIM 3: A-B uçlarından içeriye doğru bakılarak eşdeğer direnç ($R_{eş}$) hesaplanır.",
                "SONUÇ: $R_N = R_{th} = R_{eş}$."
            ],
            audioNote: "Hoca: 'R_N bulmakla R_th bulmak arasında hiçbir fark yoktur, aynı işlemdir' dedi."
        },
        {
            id: "q_norton_thevenin_conversion",
            topic: "Norton Teoremi",
            title: "Kaynak Dönüşümü (Norton <-> Thevenin)",
            isAudioContent: true,
            originalText: "\"Elinizde Thevenin varsa Norton'a, Norton varsa Thevenin'e geçebilirsiniz. Ohm kanunu geçerlidir.\"",
            summary: "İki teorem arasındaki matematiksel geçiş formülleri.",
            steps: [
                "1. Dirençler Eşittir: $R_N = R_{th}$.",
                "2. Thevenin'den Norton'a Geçiş: $I_N = V_{th} / R_{th}$.",
                "3. Norton'dan Thevenin'e Geçiş: $V_{th} = I_N \\cdot R_N$."
            ],
            audioNote: "Sınavda hangisi kolayınıza geliyorsa onu bulup diğerine dönüştürebilirsiniz (Kaynak Dönüşümü)."
        },
        {
            id: "q_rc_theory_general",
            topic: "RC Devreleri",
            title: "Kondansatör Şarj/Deşarj Denklemleri",
            isAudioContent: true,
            originalText: "\"Kondansatör DC kaynakta açık devre olur. Şarj olurken gerilimi artar, deşarj olurken azalır. Zaman sabiti Tau = R çarpı C'dir.\"",
            summary: "RC devrelerinin temel çalışma prensibi ve zaman sabiti formülü.",
            steps: [
                "1. ZAMAN SABİTİ: $\\tau = R \\cdot C$ (Saniye). (Dikkat: RL devresindeki $L/R$ ile karıştırmayın!)",
                "2. ŞARJ DENKLEMİ (Boşken dolma): $v_c(t) = V_{kaynak} (1 - e^{-t/\\tau})$.",
                "3. DEŞARJ DENKLEMİ (Doluyken boşalma): $v_c(t) = V_{ilk} \\cdot e^{-t/\\tau}$.",
                "4. KARARLI DURUM ($t \\to \\infty$): Kondansatör tamamen dolar ve AÇIK DEVRE (Kopuk Tel) gibi davranır, üzerinden akım geçmez ($i=0$)."
            ],
            audioNote: "Hoca, 'Bobin akıma karşı koyar, kondansatör gerilime karşı koyar' diyerek dualiteyi vurguladı."
        },
        {
            id: "q_rc_example_pdf27",
            topic: "RC Devreleri",
            title: "Örnek Soru: Kondansatör Şarjı (PDF Sayfa 27)",
            isAudioContent: true,
            originalText: "12V kaynak, 5k$\\Omega$ direnç ve 4$\\mu$F kondansatör seri bağlı. Kondansatör boş. Anahtar kapatılıyor. t > 0 için gerilim denklemi nedir?",
            summary: "Hocanın tahtada çözdüğü klasik RC şarj sorusu.",
            steps: [
                "ADIM 1 (Verilenler): $V_s = 12V$, $R = 5 \\times 10^3 \\Omega$, $C = 4 \\times 10^{-6} F$.",
                "ADIM 2 (Zaman Sabiti): $\\tau = R \\cdot C = (5 \\times 10^3) \\cdot (4 \\times 10^{-6}) = 20 \\times 10^{-3} = 0.02$ saniye.",
                "ADIM 3 (Formül): Şarj olduğu için $v(t) = V_s (1 - e^{-t/\\tau})$ kullanılır.",
                "ADIM 4 (Yerine Koyma): $v(t) = 12 (1 - e^{-t/0.02}) = 12 (1 - e^{-50t})$ Volt."
            ],
            audioNote: "Üstel ifadenin paydasındaki 0.02 yukarıya 50 olarak çıkar ($1/0.02 = 50$). İşlem hatası yapmayın."
        },
        {
            id: "q_rl_switch_22dec",
            topic: "RL Devreleri",
            title: "Anahtarlamalı Soru (22 Aralık - Kayıt 1)",
            isAudioContent: true,
            originalText: "\"12V kaynak, 4 ohm ve 10 ohm direnç, 0.1H bobin... Anahtar açılıyor, i(t) ve v(t) nedir?\"",
            summary: "Kaynağın devreden çıktığı (Source-Free) ve bobinin 10 ohm direnç üzerinden deşarj olduğu soru.",
            steps: [
                "ADIM 1 ($t<0$): Anahtar kapalı. Bobin DC'de KISA DEVRE olur. Bobine paralel bağlı 10$\\Omega$ direnç kısa devre olur (akım geçmez).",
                "ADIM 2 (Başlangıç Akımı): Tüm akım 4$\\Omega$ ve bobinden geçer. $I_0 = 12V / 4\\Omega = 3A$.",
                "ADIM 3 ($t>0$): Anahtar açılır. 12V kaynak ve 4$\\Omega$ direnç devreden kopar. Bobin (0.1H) ve 10$\\Omega$ direnç yalnız kalır.",
                "ADIM 4 (Zaman Sabiti): $\\tau = L/R_{eş} = 0.1 / 10 = 0.01$ saniye.",
                "ADIM 5 (Denklemler): Akım $i(t) = 3e^{-100t} A$. Gerilim $v(t) = L(di/dt) = -30e^{-100t} V$."
            ],
            audioNote: "Hoca 'Bobine paralel direncin kısa devre olması' tuzağına dikkat çekti. t>0'da ise o direnç geri devreye giriyor."
        },
        {
    id: "rc_desarj_soru_1",
    topic: "RC Devreleri (Deşarj)",
    title: "Kondansatör Deşarjı ve Zaman Sabiti Hesabı",
    isAudioContent: true,
    originalText: "\"5 mikrofaradlık ($5\\mu F$) kondansatörün ucundaki gerilim $t < 0$ anında $4$ Volt olarak verilmiştir. $t = 0$ anında anahtar kapatılmaktadır. Zaman sabiti, gerilim-zaman fonksiyonu ve $6k\\Omega$ direncin akım değerini bulunuz.\"",
    summary: "Başlangıç gerilimi verilen bir kondansatörün anahtar kapatıldıktan sonraki deşarj davranışının analizi.",
    steps: [
        "Adım 1: Devrenin zaman sabiti ($\\tau$) bulunmalıdır. Bunun için kondansatör uçlarından görülen eşdeğer direnç ($R_{eş}$) hesaplanır.",
        "Adım 2: Dirençler birbirine paraleldir (Seste $6k\\Omega$ ve $3k\\Omega$ ima ediliyor, $R_{eş}$ hesabı için). $R_{eş} = 2k\\Omega$ bulunur.",
        "Adım 3: Zaman sabiti formülü uygulanır: $\\tau = R_{eş} \\cdot C = 2000 \\cdot 5 \\cdot 10^{-6} = 0.01s$ (veya $10ms$).",
        "Adım 4: Gerilim fonksiyonu oluşturulur (Deşarj formülü): $v(t) = V_0 \\cdot e^{-t/\\tau} \\Rightarrow v(t) = 4e^{-100t} V$.",
        "Adım 5: $6k\\Omega$ direnç üzerindeki akım Ohm kanunu ile bulunur: $i_{6k}(t) = \\frac{v(t)}{6000} A$."
    ],
    audioNote: "Hoca, zaman sabiti ($\tau$) bulunduktan sonra fonksiyonun yazılmasının çok standart bir prosedür olduğunu vurguluyor."
},
{
    id: "rc_sarj_konu_anlatim",
    topic: "RC Devreleri (Şarj)",
    title: "Kondansatör Şarj Denklemi: Zorlanmış ve Doğal Çözüm",
    isAudioContent: true,
    originalText: "\"Genel çözüm ($v(t)$), zorlanmış çözüm ile doğal çözümün toplamına eşittir. Zorlanmış çözüm aslında üretecin gerilimidir. Doğal çözüm ise $A \\cdot e^{-t/RC}$ ifadesidir.\"",
    summary: "Kondansatörün şarj olma sürecinde gerilim denkleminin türetilmesi ve çözüm yönteminin (Diferansiyel denklem yaklaşımı) anlatımı.",
    steps: [
        "Adım 1: Kirchhoff Gerilim Yasası ile devre denklemi yazılır.",
        "Adım 2: Çözüm iki parçadan oluşur: $v(t) = v_{zorlanmış} + v_{doğal}$.",
        "Adım 3: Zorlanmış çözüm devredeki kaynağa ($V_{kaynak}$), doğal çözüm ise sönümlenen üsse ($A \\cdot e^{-t/RC}$) karşılık gelir.",
        "Adım 4: Genel denklem: $v(t) = V_{kaynak} + A \\cdot e^{-t/RC}$.",
        "Adım 5: $A$ sabitini bulmak için $t=0$ anındaki başlangıç koşulu ($v(0)$) kullanılır."
    ],
    audioNote: "Hoca, çözümün 'Biraz ezber, biraz mantık' olduğunu belirtiyor. Formülün yapısını anlamanın işlem hatasını önleyeceğini vurguluyor."
},
{
    id: "rc_sarj_ornek_soru_12v",
    topic: "RC Devreleri (Şarj)",
    title: "RC Şarj Devresi Analizi (Başlangıç Koşullu)",
    isAudioContent: true,
    originalText: "\"4 mikrofarad değerinde bir kondansatör, $R = 5 k\\Omega$ üzerinden 12 Voltluk bir gerilim kaynağına bağlanmıştır. $t > 0$ için kondansatör gerilimi ve akımını bulunuz.\"",
    summary: "Başlangıçta belirli bir gerilime ($V_0=2V$) sahip kondansatörün 12V kaynağa bağlandığı durumun analizi.",
    steps: [
        "Adım 1: Zaman sabiti hesaplanır: $\\tau = R \\cdot C = 5000 \\cdot 4 \\cdot 10^{-6} = 0.02s$.",
        "Adım 2: Başlangıç ve final değerleri belirlenir. Şemadan $v(0) = 2V$ (başlangıç) ve kaynak $v(\\infty) = 12V$ (final).",
        "Adım 3: Genel şarj denklemi kullanılır: $v(t) = v(\\infty) + [v(0) - v(\\infty)]e^{-t/\\tau}$",
        "Adım 4: Değerler yerine konur: $v(t) = 12 + (2 - 12)e^{-50t} \\Rightarrow v(t) = 12 - 10e^{-50t} V$.",
        "Adım 5: Akım denklemi türev ile bulunur ($i = C \\frac{dv}{dt}$): $i(t) = 4\\mu F \\cdot (-10 \\cdot -50 \\cdot e^{-50t}) = 2e^{-50t} mA$."
    ],
    audioNote: "Hoca soruyu yazdırdıktan sonra çözüm için süre tanıyor. Dikkat: Sözlü olarak söylenmese de tahtadaki şemada başlangıç gerilimi ($V_0$) 2V olarak verilmiştir, çözüm buna göre yapılmalıdır."
},
{
    id: "rc_sarj_akim_analizi_detay",
    topic: "RC Devreleri (Şarj)",
    title: "Şarj Devresinde Akım Denkleminin Türetilmesi",
    isAudioContent: true,
    originalText: "\"İ akımı şöyle bir şey değil mi? $12 - V_c(t)$ bölü $5k$. Yani ohm kanunu.\"",
    summary: "RC şarj sorusunda gerilim fonksiyonu bulunduktan sonra, akım fonksiyonunun türev almak yerine Ohm Kanunu ile pratik yoldan bulunması.",
    steps: [
        "Yöntem 1 (Türev): Kondansatör akımı $i = C \\frac{dv}{dt}$ formülüyle bulunur.",
        "Yöntem 2 (Pratik - Ohm Kanunu): Kaynak gerilimi sabit ($12V$) olduğu için direnç üzerindeki gerilim $V_R = 12 - v_c(t)$ olur.",
        "Adım 1: Direnç gerilimi bulunur: $V_R = 12 - (12 - 10e^{-50t}) = 10e^{-50t} V$.",
        "Adım 2: Direnç değeri ($5k\\Omega$) ile bölünür: $i(t) = \\frac{10e^{-50t}}{5000}$.",
        "Sonuç: $i(t) = 2 \\cdot 10^{-3} e^{-50t} A$ yani $2e^{-50t} mA$."
    ],
    audioNote: "Hoca, akım denklemini bulurken türevle uğraşmak yerine devre üzerindeki gerilim farkından gitmenin daha güvenli olduğunu ima ediyor."
},
{
    id: "rl_desarj_giris",
    topic: "RL Devreleri (Bobin Deşarjı)",
    title: "RL Devresi Deşarj Denklemi ve Zaman Sabiti",
    isAudioContent: true,
    originalText: "\"Bobini deşarj edeceğiz. Denklem yine üstel azalma olacak: $i(t) = I_0 e^{-t/\\tau}$. Ama burada $\\tau$ farklı.\"",
    summary: "Bobinli (İndüktör) devrelerde deşarj mantığına giriş ve formül yapısı.",
    steps: [
        "Adım 1: RL devresinde kaynak devreden çıktığında bobin üzerindeki akım sönümlenir.",
        "Adım 2: Akım denklemi: $i(t) = I_0 \\cdot e^{-t/\\tau}$. ($I_0$: Başlangıç akımı)",
        "Adım 3: Zaman Sabiti ($\\tau$): RC devresinin aksine burada $\\tau = \\frac{L}{R}$ formülü ile hesaplanır.",
        "Adım 4: Bobin DC kaynak altında kısa devre (düz tel) gibi davranır, başlangıç akımı buna göre bulunur."
    ],
    audioNote: "Hoca 'Bobin şarjı ve deşarjı' başlığını attırıyor. Kondansatördeki $V_0$ yerine burada $I_0$ (Başlangıç Akımı) kritik öneme sahip."
},
{
    id: "rl_desarj_soru_final",
    topic: "RL Devreleri (Deşarj)",
    title: "RL Deşarjı: Sınav Sorusu",
    isAudioContent: true,
    originalText: "\"10 milihenrilik ($10mH$) bir bobin, 1 Ohmluk ($1\\Omega$) bir dirence bağlanıyor. $t=0$ anında $I_0 = 4$ Amper olduğuna göre; zaman sabiti, akım-zaman fonksiyonu ve $t=0.02$ saniyedeki akım değerini bulunuz.\"",
    summary: "Başlangıç akımı verilen bir bobinin direnç üzerinden deşarjının detaylı analizi ve anlık değer hesabı.",
    steps: [
        "Adım 1: Birim çevirme: $L = 10mH = 0.01H$. Direnç $R = 1\\Omega$.",
        "Adım 2: Zaman sabiti hesabı (Dikkat $L/R$): $\\tau = \\frac{L}{R} = \\frac{0.01}{1} = 0.01s$.",
        "Adım 3: Akım fonksiyonunun yazılması: $i(t) = I_0 \\cdot e^{-t/\\tau} \\Rightarrow i(t) = 4 \\cdot e^{-t/0.01} = 4e^{-100t} A$.",
        "Adım 4: İstenen andaki ($t=0.02s$) değerin bulunması: $i(0.02) = 4 \\cdot e^{-100 \\cdot 0.02} = 4 \\cdot e^{-2} A$.",
        "Adım 5: Sonuç: $4 \\cdot 0.135 \\approx 0.54 A$."
    ],
    audioNote: "Hoca bu sorunun 'Garanti Sınav Sorusu' olduğunu ima ediyor ve öğrencilere fotoğrafını çektiriyor."
},
{
    id: "rl_desarj_detay_1",
    topic: "RL Devreleri (Bobin Deşarjı)",
    title: "Akım-Zaman Fonksiyonu Detayı",
    isAudioContent: true,
    originalText: "\"Zaman sabiti $\\tau = L/R$ olarak 10 milisaniye ($0.01s$) bulundu. $4 \\times e^{-1000t}$ değil, $4 \\times e^{-100t}$ olacak.\"",
    summary: "Bobin deşarj sorusunda zaman sabiti bulunduktan sonra üs kısmındaki katsayının doğru hesaplanması.",
    steps: [
        "Adım 1: Zaman sabiti: $\\tau = 10ms = 0.01s$.",
        "Adım 2: Denklem: $i(t) = I_0 \\cdot e^{-t/\\tau}$.",
        "Adım 3: Üs hesabı: $1 / 0.01 = 100$. (Kaydın başında '1000t' diye bir düzeltme yapılıyor ama doğrusu 100t).",
        "Adım 4: Nihai denklem: $i(t) = 4e^{-100t} A$."
    ],
    audioNote: "Hoca, denklemdeki üs katsayısının (1/tau) hesaplanmasında işlem hatası yapılmaması gerektiğini vurguluyor."
},
{
    id: "rl_sarj_teori_ispat",
    topic: "RL Devreleri (Şarj)",
    title: "Bobin Şarj Akım Denkleminin İspatı",
    isAudioContent: true,
    originalText: "\"Bu diferansiyel denklemi çözerken $i(t) = i_h(t) + i_p(t)$ demişim. Birisi doğal çözümü, birisi zorlanmış çözümü ifade ediyor.\"",
    summary: "Bobin şarj formülünün diferansiyel denklem (Homojen + Özel Çözüm) yöntemiyle adım adım türetilmesi.",
    steps: [
        "Adım 1: Toplam akım, Doğal Çözüm ($i_h$) ve Zorlanmış Çözümün ($i_p$) toplamıdır.",
        "Adım 2: Doğal çözüm (Sönümlenen kısım): $i_h(t) = A \\cdot e^{-t/\\tau}$.",
        "Adım 3: Zorlanmış çözüm (Kararlı hal): $i_p(t) = \\frac{V_0}{R}$.",
        "Adım 4: Başlangıç koşulu ($t=0, i=0$) uygulanır: $0 = A + \\frac{V_0}{R} \\Rightarrow A = -\\frac{V_0}{R}$.",
        "Adım 5: A yerine yazılır ve paranteze alınır: $i(t) = \\frac{V_0}{R}(1 - e^{-t/\\tau})$."
    ],
    audioNote: "Hoca, formülün ezberlenmesinden ziyade bu çıkarım mantığının (özellikle A katsayısının nasıl bulunduğunun) öğrenilmesini istiyor."
},
{
    id: "rl_baslangic_kosulu_analizi",
    topic: "RL Devreleri (Anahtarlama)",
    title: "RL Devresinde Başlangıç Akımının ($I_0$) Bulunması",
    isAudioContent: true,
    originalText: "\"12 Voltluk üreteç t=0 anında devreden çıkarılmıştır. Anahtar kapalıyken aslında bobin kısa devre olacak. 12/4 = 3 Amper.\"",
    summary: "Bir RL devresinde anahtar açılmadan önceki ($t < 0$) kararlı durumun analizi ve bobin başlangıç akımının hesaplanması.",
    steps: [
        "Adım 1: $t < 0$ anında anahtar kapalıdır ve devre DC kaynağa bağlıdır.",
        "Adım 2: Bobin (İndüktör), DC gerilim altında kararlı halde **kısa devre** (düz tel) gibi davranır.",
        "Adım 3: Devredeki eşdeğer direnç $4\\Omega$ olarak verilmiştir (Kaynaktan bobine giden yoldaki direnç).",
        "Adım 4: Ohm kanunu uygulanır: $I_0 = \\frac{V}{R} = \\frac{12V}{4\\Omega} = 3A$.",
        "Adım 5: Bobin akımı aniden değişemeyeceği için, anahtar açıldığı andaki akım da $i(0^+) = 3A$ olarak deşarj formülünde yerine konur."
    ],
    audioNote: "Hoca, $t>0$ anında (anahtar açılınca) artık 12V kaynak ve 4 Ohm direncin devre dışı kaldığını, sadece bobin ve deşarj direncinin (önceki sorudaki 10 Ohm) kaldığını vurguluyor."
},
{
    id: "rlc_seri_teori_giris",
    topic: "RLC Devreleri (Seri)",
    title: "Seri RLC Devresi ve Karakteristik Denklem",
    isAudioContent: true,
    originalText: "\"Diferansiyel denklemin her iki tarafını L'ye bölersek: $\\frac{d^2i}{dt^2} + \\frac{R}{L}\\frac{di}{dt} + \\frac{1}{LC}i = 0$. Buradan kökleri bulacağız.\"",
    summary: "Seri RLC devresinin ikinci dereceden diferansiyel denkleminin çıkarılması ve karakteristik köklerin ($s_1, s_2$) tanımlanması.",
    steps: [
        "Adım 1: KVL yazılır: $Ri + L\\frac{di}{dt} + \\frac{1}{C}\\int i dt = V_s$.",
        "Adım 2: Türev alınarak integralden kurtulunur: $L\\frac{d^2i}{dt^2} + R\\frac{di}{dt} + \\frac{1}{C}i = 0$.",
        "Adım 3: Standart form ($\\,s^2 + 2\\alpha s + \\omega_0^2 = 0\\,$) elde etmek için her terim $L$'ye bölünür.",
        "Adım 4: Kritik Parametreler: $\\alpha = \\frac{R}{2L}$ (Neper Frekansı) ve $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ (Rezonans Frekansı).",
        "Adım 5: Karakteristik Kökler: $s_{1,2} = -\\alpha \\pm \\sqrt{\alpha^2 - \\omega_0^2}$."
    ],
    audioNote: "Hoca, $\\alpha$ formülünün Seri RLC ($R/2L$) ve Paralel RLC ($1/2RC$) için farklı olduğunu, bunu karıştırmamanız gerektiğini özellikle vurguluyor."
},
{
    id: "rlc_cozum_cesitleri",
    topic: "RLC Devreleri (Doğal Tepki)",
    title: "RLC Devrelerinde 3 Sönümleme Durumu",
    isAudioContent: true,
    originalText: "\"Alfa Omega'dan büyükse Aşırı Sönümlü. Eşitse Kritik Sönümlü. Küçükse Salınımlı yani Underdamped.\"",
    summary: "Karakteristik denklemden gelen $\\alpha$ ve $\\omega_0$ değerlerinin karşılaştırılmasıyla devrenin vereceği 3 farklı tepkinin analizi.",
    steps: [
        "Durum 1: $\\alpha > \omega_0$ $\\rightarrow$ **Aşırı Sönümlü (Overdamped)**. İki farklı reel kök vardır. Çözüm: $i(t) = A_1 e^{s_1 t} + A_2 e^{s_2 t}$.",
        "Durum 2: $\\alpha = \omega_0$ $\\rightarrow$ **Kritik Sönümlü (Critically Damped)**. Çakışık reel kökler. Çözüm: $i(t) = (A_1 + A_2 t)e^{-\\alpha t}$.",
        "Durum 3: $\\alpha < \omega_0$ $\\rightarrow$ **Düşük Sönümlü / Salınımlı (Underdamped)**. Eşlenik kompleks kökler. Çözüm sinüs/kosinüs içerir."
    ],
    audioNote: "Sınavda en çok 'Kritik Sönümlü' durumunun sorulduğu, çünkü $t$ çarpanının ($A_2 t$) unutulmaya müsait olduğu belirtiliyor."
},
{
    id: "rlc_seri_asiri_sonumlu_soru",
    topic: "RLC Devreleri (Seri)",
    title: "Seri RLC Deşarjı: Aşırı Sönümlü Durum Analizi",
    isAudioContent: true,
    originalText: "\"Kondansatörün gerilimi 200V. Bobinin gerilimi L*di/dt. L burada 0.1 ise di/dt'yi 2000 olarak bulurum. Buradan A1 ve A2 katsayılarını çekeriz.\"",
    summary: "Başlangıç gerilimi 200V olan bir kondansatörün, bobin ve direnç üzerinden deşarj olduğu 'Aşırı Sönümlü' RLC devresinin çözümü.",
    steps: [
        "Adım 1: Devrenin karakterini belirle: $\\alpha$ ve $\\omega_0$ hesaplanır. $\\alpha > \\omega_0$ olduğu görülür (Aşırı Sönümlü).",
        "Adım 2: Akım formülünü yaz: $i(t) = A_1 e^{s_1 t} + A_2 e^{s_2 t}$. Kökler ($s_1, s_2$) karakteristik denklemden bulunur (Örn: -500 ve -1500).",
        "Adım 3: Başlangıç koşulu 1 ($t=0$): Bobin akımı aniden değişmez, $i(0) = 0$. Buradan $A_1 + A_2 = 0$ denklemi çıkar.",
        "Adım 4: Başlangıç koşulu 2 ($di/dt$): KVL yazılır. $V_R + V_L + V_C = 0$. $t=0$'da $i=0$ olduğu için $V_R=0$. O halde $V_L = -V_C$.",
        "Adım 5: Türev hesabı: $L \\frac{di}{dt} = -200V \\Rightarrow \\frac{di}{dt} = -2000 A/s$ (Hoca mutlak değer veya yön kabulüyle 2000 almış olabilir, işarete dikkat).",
        "Adım 6: Denklem çözümü: İki bilinmeyenli denklemden $A_1$ ve $A_2$ bulunur ($A_1=2, A_2=-2$).",
        "Sonuç: $i(t) = 2e^{-500t} - 2e^{-1500t} A$."
    ],
    audioNote: "Hoca, ikinci katsayıyı bulmak için akımın türevini ($di/dt$) almanın şart olduğunu, bunu da bobin gerilimi ($V_L$) üzerinden yapmanız gerektiğini vurguluyor."
},
{
    id: "rlc_salinimli_underdamped_formu",
    topic: "RLC Devreleri (Salınımlı/Underdamped)",
    title: "Salınımlı (Underdamped) Durumun Denklemi",
    isAudioContent: true,
    originalText: "\"Şunu bilmeseniz de olur ($e^{j\beta t}$), şöyle bir ifade: $e^{-\\alpha t} [A_1 \\cos(\\beta t) + A_2 \\sin(\\beta t)]$ olduğunu bilin yeterli.\"",
    summary: "Karakteristik denklem köklerinin karmaşık sayı çıktığı ($\alpha < \omega_0$) 'Salınımlı' durum için genel çözüm formülü.",
    steps: [
        "Adım 1: $\\alpha$ ve $\\omega_0$ hesaplanır. Eğer $\\alpha < \omega_0$ ise sistem Salınımlıdır (Underdamped).",
        "Adım 2: Sönümlü osilasyon frekansı ($\\beta$ veya $\\omega_d$) bulunur: $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$.",
        "Adım 3: Genel çözüm formülü yazılır: $i(t) = e^{-\\alpha t} (A_1 \\cos(\\omega_d t) + A_2 \\sin(\\omega_d t))$.",
        "Adım 4: $A_1$ ve $A_2$ katsayıları başlangıç koşulları ($i(0)$ ve $di/dt(0)$) kullanılarak bulunur."
    ],
    audioNote: "Hoca tahtaya Euler formülüyle ($e^{j\beta t}$) açılımını yazsa da, pratikte Sinüs/Kosinüs formunu bilmenizin yeterli olduğunu söylüyor."
},
        
    ],

    // BÖLÜM 2: SINAV TÜYOLARI----------------------------------------------------------------------------------------
    tips: [
        {
            id: "t_lin_1",
            type: "info", // info, warning, danger, tip
            title: "Lineerlik Şartı (Güncel Ses Kaydı)",
            content: "Sistemin lineer olması (V=I*R gibi) zorunludur. Güç (P=I²R) karesel olduğu için lineer değildir, bu yüzden Süperpozisyon ile GÜÇ BULUNAMAZ.",
            probability: "Temel Kural"
        },
        {
            id: "t_sup_1",
            type: "danger",
            title: "Süperpozisyon ve Bağımlı Kaynaklar",
            content: "Bağımlı kaynaklar (baklava dilimi) asla kapatılmaz/yok edilmez. İşlem hatası yapmayın.",
            probability: "Çok Yüksek"
        },
        {
            id: "t_dc_1",
            type: "warning",
            title: "DC Kaynakta L ve C Davranışı",
            content: "Bobin (L) -> Kısa Devre (Düz Tel). Kapasitör (C) -> Açık Devre (Kopuk Tel).",
            probability: "%100"
        },
        {
            id: "t_homework_node_mesh_super",
            type: "danger", // Kırmızı uyarı, çünkü zorunlu ödev
            title: "ZORUNLU ÖDEV (Haftaya)",
            content: "Hoca derste dikte ettirdi: 'Düğüm Gerilimleri, Çevre Akımları ve Süperpozisyon yöntemlerinin her birinden 3'er tane (Toplam 9 soru) çözüp kağıda yazarak getirin.'",
            probability: "Kontrol Edilecek"
        },
        {
            id: "t_thevenin_purpose",
            type: "info",
            title: "Neden Thevenin?",
            content: "Eğer bir devrede Yük Direnci ($R_L$) sürekli değişiyorsa, devreyi her seferinde baştan çözmek yerine Thevenin eşdeğerini ($V_{th}, R_{th}$) bir kere bulmak yeterlidir.",
            probability: "Konsept"
        },
        {
            id: "t_thevenin_warning",
            type: "warning",
            title: "Düğüm İşaretleme Kuralı",
            content: "Ses kaydında hoca 2. maddeye şerh düştü: 'Düğümleri işaretleyiniz.' Kabloların ucuna A ve B harflerini yazmazsanız, kaynakları kapattığınızda hangi noktadan bakarak eşdeğer direnç alacağınızı karıştırırsınız.",
            probability: "Hata Önleyici"
        },
        {
            id: "t_norton_thevenin_relation",
            type: "info",
            title: "Thevenin <-> Norton Dönüşümü",
            content: "Thevenin ve Norton birbirine dönüşebilir. $R_{th} = R_N$ her zaman eşittir. Gerilim kaynağını akım kaynağına çevirmek için $I_N = V_{th} / R_{th}$ formülü kullanılır.",
            probability: "Pratik Bilgi"
        },
        {
            id: "t_homework_update",
            type: "danger",
            title: "GÜNCEL ÖDEV (Norton Eklendi)",
            content: "Hoca ödevi güncelledi: 'Haftaya Thevenin'den 3 soru, Norton'dan 3 soru (Toplam 6 soru) çözülüp getirilecek.' Soruları 'Eşitlikler/Denklikler' faslından seçin dedi.",
            probability: "Kontrol Edilecek"
        },
        {
            id: "t_inductor_dc",
            type: "danger",
            title: "Bobinin DC Davranışı (Hayati Kural)",
            content: "Hoca ısrarla vurguladı: DC kaynak altında, kararlı durumda (uzun süre beklendiğinde) Bobin KISA DEVRE (Düz Tel) gibi davranır. Soruyu çözmeye her zaman bu kural ile başlayın.",
            probability: "%100"
        },
        {
            id: "t_continuity_current",
            type: "info",
            title: "Akımın Sürekliliği İlkesi",
            content: "Bobin akımı aniden değişemez. Anahtar açılmadan hemen önceki akım ($t=0^-$) neyse, açıldıktan hemen sonraki akım ($t=0^+$) da odur. $i(0^-) = i(0^+)$. Bu değer başlangıç koşuludur.",
            probability: "Temel Prensip"
        },
        {
            id: "t_capacitor_dc_behavior",
            type: "danger",
            title: "Kondansatörün DC Davranışı (ÇOK ÖNEMLİ)",
            content: "Sınavda en çok karıştırılan nokta: DC kaynakta, kararlı durumda (sürekli hal); Bobin KISA DEVRE (Düz Tel) olurken, Kondansatör AÇIK DEVRE (Kopuk Tel) olur. Yani kondansatörün olduğu koldan DC akım GEÇMEZ.",
            probability: "%100"
        },
        {
            id: "t_energy_storage",
            type: "info",
            title: "Enerji Formülleri",
            content: "Bobinde depolanan enerji: $W_L = \\frac{1}{2} L i^2$. Kondansatörde depolanan enerji: $W_C = \\frac{1}{2} C v^2$. Enerji sorularında bu formüller şart.",
            probability: "Ekstra Puan"
        },
        {
            id: "t_parallel_short",
            type: "danger",
            title: "Paralel Direnç Tuzağı",
            content: "Eğer bir bobin, DC analizde kısa devre (düz tel) oluyorsa ve ona PARALEL bağlı bir direnç varsa; o dirençten akım geçmez (Kısa devre olur). Ancak anahtar açılıp bobin kaynak haline gelince o direnç tekrar çalışır.",
            probability: "Dikkat Sorusu"
        },
        {
    id: "tip_forced_natural",
    type: "info",
    title: "Çözüm Mantığı",
    content: "Devre denklemini çözerken sonucun her zaman **Zorlanmış Çözüm** (Kaynak) + **Doğal Çözüm** (Üstel Azalma) toplamı olduğunu unutma: $v(t) = V_f + V_n$",
    probability: "Temel Bilgi"
},
{
    id: "tip_constant_A_trap",
    type: "danger",
    title: "A Sabiti Tuzağı",
    content: "Genel denklemdeki $A$ sabiti her zaman $-V_{kaynak}$ değildir! Eğer kondansatörün başlangıçta bir yükü ($v(0) \\neq 0$) varsa, $t=0$ koyarak $A$ değerini özel olarak hesaplamalısın.",
    probability: "Tuzak Soru"
},
{
    id: "tip_rc_unit_conversion",
    type: "warning",
    title: "Birim Çevirme Hatası",
    content: "Zaman sabiti $\\tau = R \\cdot C$ hesabında Direnci Ohm ($\\Omega$), Kapasiteyi Farad ($F$) cinsinden yazmayı unutma! ($k\\Omega \\rightarrow 10^3$, $\\mu F \\rightarrow 10^{-6}$)",
    probability: "%100"
},
{
    id: "tip_rc_initial_voltage",
    type: "danger",
    title: "Ezber Formül Tuzağı",
    content: "Kondansatör şarj formülünü ezbere $v(t) = V_{kaynak}(1 - e^{-t/\\tau})$ olarak kullanma! Bu sadece kondansatör **boşsa** ($V_0=0$) geçerlidir. Eğer başlangıçta yük varsa genel formülü kullanmalısın.",
    probability: "Tuzak Soru"
},
{
    id: "tip_v0_notation_confusion",
    type: "warning",
    title: "V0 Notasyon Karmaşası",
    content: "Formüllerdeki $V_0$ ile soruda verilen kaynak gerilimi ($V_{kaynak}$) veya başlangıç koşulu ($v(0)$) birbirine karıştırılmamalıdır. Hoca, $A$ katsayısını bulurken $t=0$ anını denklemde yerine koyarak ($v(0) = A + V_{kaynak}$) sağlamasını yapmanızı öneriyor.",
    probability: "Yüksek"
},
{
    id: "tip_tau_difference",
    type: "info",
    title: "Tau Formül Farkı",
    content: "Dikkat: RC devrelerinde zaman sabiti $\\tau = R \\cdot C$ iken, RL devrelerinde $\\tau = \\frac{L}{R}$ 'dir. Sınav heyecanıyla bunları karıştırma.",
    probability: "Temel Bilgi"
},
{
    id: "tip_tau_physical_meaning",
    type: "info",
    title: "Zaman Sabitinin Anlamı",
    content: "Hoca önemli bir not yazdırıyor: Zaman sabiti ($\\tau$) ne kadar büyükse, bobinin veya kondansatörün şarj/deşarj olma süresi o kadar **uzun** olur. Sistem daha yavaş tepki verir.",
    probability: "Kavram Sorusu"
},
{
    id: "tip_rl_formula_mixup",
    type: "danger",
    title: "Formül Karışıklığı",
    content: "RC devrelerinde zaman sabiti $\\tau = RC$ çarpımı iken, RL devrelerinde $\\tau = \\frac{L}{R}$ bölümüdür. Hoca tahtada $L/R$'nin zaman sabitine eşit olduğunu özellikle vurguluyor.",
    probability: "Yüksek"
},
{
    id: "tip_future_circuit2",
    type: "info",
    title: "Gelecek Vizyonu: Devre 2",
    content: "Hoca, bu diferansiyel denklemlerin ileride (Devre 2 dersinde) 'S Domeni' ($d/dt \\rightarrow s$) ve 'Fazör Domeni' ($j\\omega$) yöntemleriyle çok daha kolay çözüleceğini belirtiyor. Şimdilik zor yoldan (zaman domeni) öğrenmek zorundasınız.",
    probability: "Genel Kültür"
},
{
    id: "tip_calculator_use",
    type: "tip",
    title: "Hesap Makinesi Kullanımı",
    content: "Sınavda $e^{-2}$ gibi değerleri hesaplamak için bilimsel hesap makinesi kullanımına aşina olun. Hoca $0.02$ saniyedeki değeri ($0.54A$) hesap makinesiyle bulduğunu belirtiyor.",
    probability: "Sınav Taktigi"
},
{
    id: "tip_rl_tau_confusion",
    type: "danger",
    title: "Tau Formülü Karışıklığı",
    content: "Sınıfta bir öğrenci zaman sabitini $R \\cdot C$ (Kondansatör formülü) ile karıştırdı. Hoca düzeltti: Bobinli devrelerde zaman sabiti $\\tau = \\frac{L}{R}$ 'dir.",
    probability: "Tuzak Soru"
},
{
    id: "tip_forced_response_meaning",
    type: "info",
    title: "Zorlanmış Çözüm Nedir?",
    content: "Zorlanmış çözüm ($i_p$), devrenin sonsuzda ($t \\rightarrow \\infty$) alacağı değerdir. Bobin DC'de kısa devre olacağı için bu değer Ohm kanunuyla $\\frac{V_0}{R}$ olur.",
    probability: "Kavram Sorusu"
},
{
    id: "tip_dc_behavior_summary",
    type: "info",
    title: "Bobin ve Kondansatörün DC Davranışı",
    content: "Hoca şu iki kuralın adınız gibi bilinmesini istiyor: \n1. **Bobin (L):** DC'de Kısa Devre (Short Circuit). \n2. **Kondansatör (C):** DC'de Açık Devre (Open Circuit).",
    probability: "%100"
},
{
    id: "tip_derive_functions_homework",
    type: "warning",
    title: "Fonksiyon Çıkarımlarını Çalışın",
    content: "Hoca sınavda başarılı olmak için şu 4 temel durumun formüllerinin nasıl çıkarıldığını (türetildiğini) incelemenizi istedi: RL Şarj, RL Deşarj, RC Şarj, RC Deşarj.",
    probability: "Yüksek"
},
{
    id: "tip_rlc_exam_strategy",
    type: "danger",
    title: "RLC Sınav Stratejisi",
    content: "RLC sorularında ilk adım her zaman $\\alpha$ ve $\\omega_0$'ı doğru hesaplamaktır. Eğer bu ikisi yanlışsa, devrenin tipini (Aşırı/Kritik/Salınımlı) yanlış belirlersin ve sorunun devamındaki tüm puanlar gider. İşlem hatası yapma lüksünüz yok!",
    probability: "%100"
},
{
    id: "tip_calculator_roots",
    type: "tip",
    title: "Hesap Makinesi ile Kök Bulma",
    content: "Karakteristik denklemin köklerini ($s_1, s_2$) elle hesaplarken karekök içindeki ifadenin negatif çıkması (kompleks sayı) durumunda paniklemeyin. Bu 'Salınımlı' (Underdamped) durumdasınız demektir. Hesap makinenizi 'Complex Mode'da kullanmayı öğrenin.",
    probability: "Sınav Taktiği"
},
{
    id: "tip_rlc_derivative_trick",
    type: "danger",
    title: "RLC'de 2. Sabiti Bulma Püf Noktası",
    content: "İkinci dereceden devrelerde ($A_1$ ve $A_2$ bulurken) sadece $i(0)$ yetmez! Mutlaka $t=0$ anındaki türevi ($\\frac{di}{dt}$) bulmanız gerekir. Bunu yapmak için KVL yazın: $V_L + V_R + V_C = 0$ eşitliğinden $V_L$'yi çekin ve $V_L = L \\frac{di}{dt}$ formülünü kullanın.",
    probability: "%100"
},
{
    id: "tip_differential_exam_note",
    type: "info",
    title: "Diferansiyel Çözüm Yok",
    content: "Hoca sınavda diferansiyel denklemi sıfırdan türetmenizi (ispat yapmanızı) istemeyeceğini, doğrudan devre analizi yaparak (karakteristik denklem kökleri üzerinden) sonuca gitmenizi beklediğini belirtiyor.",
    probability: "Sınav Formatı"
},
{
    id: "tip_exam_grading_policy",
    type: "tip",
    title: "5 Puanlık Can Simidi",
    content: "Sınavda işlem hatası yapıp sonucu yanlış bulsanız bile, **önce denklemi/formülü ( $i(t) = ...$ ) doğru yazın**. Hoca, 'Sonuç yanlışsa denkleme bakacağım, denklem doğruysa oradan 5 puan alırsınız' diyerek puanlama kriterini açıkladı.",
    probability: "Hayat Kurtarır"
},

// C) Tips dizisine eklenecek "Denklem Çözme Yöntemi":
{
    id: "tip_linear_algebra_method",
    type: "info",
    title: "Katsayıları Nasıl Bulurum?",
    content: "A1 ve A2'yi bulmak için çıkan iki bilinmeyenli denklemi çözerken Matris (Cramer) veya Gauss Yok Etme metodu kullanmak zorunda değilsiniz. Basit yerine koyma (substitution) metoduyla da çözseniz kabul edilir. Önemli olan doğru $A_1, A_2$ değerlerine ulaşmaktır.",
    probability: "İşlem Kolaylığı"
}
    ]
};