"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Gift, HandHeart, PackageCheck, Send, ShieldCheck, Sparkles } from "lucide-react";

type ExchangeItem = {
  id: string;
  ownerName: string;
  country: string;
  city: string;
  title: string;
  offer: string;
  wish: string;
  story: string;
  shipping: string;
  createdAt: string;
};

const storageKey = "silkstudy-beauty-exchanges";

const starterItems: ExchangeItem[] = [
  {
    id: "morocco-tea-postcards",
    ownerName: "Amina",
    country: "Morocco",
    city: "Chengdu",
    title: "Moroccan mint tea and handmade postcards",
    offer: "A small sealed pack of mint tea, two postcards, and a note about my hometown.",
    wish: "I would love to exchange for a Chinese city postcard, campus souvenir, or tea story.",
    story: "Mint tea is how my family welcomes guests. I want to share that feeling with friends studying in China.",
    shipping: "Campus meetup or domestic parcel after both sides confirm details.",
    createdAt: "2026-07-04"
  },
  {
    id: "vietnam-coffee-bookmark",
    ownerName: "Linh",
    country: "Vietnam",
    city: "Hangzhou",
    title: "Vietnamese coffee and a bookmark",
    offer: "Single sealed drip coffee bags and a handmade bookmark.",
    wish: "Looking for a small local snack, university badge, or a handwritten travel tip.",
    story: "Coffee culture is part of everyday life in Vietnam. This is a small way to start a conversation.",
    shipping: "Public campus exchange only.",
    createdAt: "2026-07-04"
  },
  {
    id: "turkey-evil-eye-charm",
    ownerName: "Emir",
    country: "Turkey",
    city: "Shanghai",
    title: "Turkish blue charm and sweets",
    offer: "A small decorative charm and packaged sweets from Turkey.",
    wish: "I want to exchange for something that tells the story of another student's hometown.",
    story: "Small objects carry big memories. I hope this exchange makes international friendship feel real.",
    shipping: "Meet in a public place or use tracked delivery.",
    createdAt: "2026-07-04"
  }
];

const copy = {
  en: {
    eyebrow: "Exchange beautiful things",
    title: "Share a small object from your country. Receive a story from someone else's world.",
    body: "Post sealed snacks, postcards, books, campus souvenirs, handmade crafts, or cultural gifts. Keep it small, safe, legal, and meaningful.",
    offer: "I can share",
    wish: "I hope to receive",
    story: "Story behind it",
    shipping: "Exchange method",
    name: "Display name",
    country: "Country",
    city: "City in China",
    itemTitle: "Exchange title",
    submit: "Post exchange",
    wall: "Beautiful exchanges",
    safety: "Safety first: no medicine, alcohol, counterfeit goods, expensive items, cash, animals, controlled products, or private addresses in public posts. Meet in public spaces or use tracked delivery.",
    success: "Your exchange has been added on this device. Connect it to the community API later for public review."
  },
  zh: {
    eyebrow: "交换美好",
    title: "把来自你国家的一件小物，换成另一个世界的故事。",
    body: "可以交换密封零食、明信片、书、校园纪念品、手作、文化小礼物。重点是小而美、安全、合法、有故事。",
    offer: "我可以分享",
    wish: "我希望换到",
    story: "它背后的故事",
    shipping: "交换方式",
    name: "显示名称",
    country: "国家",
    city: "所在中国城市",
    itemTitle: "交换标题",
    submit: "发布交换",
    wall: "美好交换墙",
    safety: "安全提醒：不要交换药品、酒类、假货、高价物品、现金、动物、管制品，也不要在公开内容里写私人住址。建议公共场所见面或使用可追踪快递。",
    success: "你的交换已添加到当前设备。之后接入社区 API 后可进入公开审核。"
  },
  vi: {
    eyebrow: "Trao đổi điều đẹp",
    title: "Chia sẻ một món đồ nhỏ từ quốc gia bạn. Nhận về câu chuyện từ thế giới của người khác.",
    body: "Có thể đăng đồ ăn đóng gói, bưu thiếp, sách, quà lưu niệm trường, đồ thủ công hoặc quà văn hóa. Nhỏ, an toàn, hợp pháp và có ý nghĩa.",
    offer: "Tôi có thể chia sẻ",
    wish: "Tôi muốn nhận",
    story: "Câu chuyện phía sau",
    shipping: "Cách trao đổi",
    name: "Tên hiển thị",
    country: "Quốc gia",
    city: "Thành phố ở Trung Quốc",
    itemTitle: "Tiêu đề trao đổi",
    submit: "Đăng trao đổi",
    wall: "Những trao đổi đẹp",
    safety: "An toàn trước hết: không thuốc, rượu, hàng giả, đồ đắt tiền, tiền mặt, động vật, hàng kiểm soát, hoặc địa chỉ riêng trong bài công khai.",
    success: "Trao đổi của bạn đã được thêm trên thiết bị này."
  },
  id: {
    eyebrow: "Bertukar hal indah",
    title: "Bagikan benda kecil dari negaramu. Terima cerita dari dunia orang lain.",
    body: "Posting makanan tersegel, kartu pos, buku, suvenir kampus, kerajinan, atau hadiah budaya. Kecil, aman, legal, dan bermakna.",
    offer: "Saya bisa berbagi",
    wish: "Saya ingin menerima",
    story: "Cerita di baliknya",
    shipping: "Metode pertukaran",
    name: "Nama tampilan",
    country: "Negara",
    city: "Kota di Tiongkok",
    itemTitle: "Judul pertukaran",
    submit: "Posting pertukaran",
    wall: "Pertukaran indah",
    safety: "Utamakan keselamatan: jangan obat, alkohol, barang palsu, barang mahal, uang tunai, hewan, barang terkontrol, atau alamat pribadi di posting publik.",
    success: "Pertukaranmu telah ditambahkan di perangkat ini."
  },
  ms: {
    eyebrow: "Bertukar perkara indah",
    title: "Kongsi satu objek kecil dari negara anda. Terima satu cerita dari dunia orang lain.",
    body: "Kongsi makanan berbungkus, poskad, buku, cenderamata kampus, kraf tangan, atau hadiah budaya. Kecil, selamat, sah, dan bermakna.",
    offer: "Saya boleh berkongsi",
    wish: "Saya berharap menerima",
    story: "Cerita di sebaliknya",
    shipping: "Kaedah pertukaran",
    name: "Nama paparan",
    country: "Negara",
    city: "Bandar di China",
    itemTitle: "Tajuk pertukaran",
    submit: "Hantar pertukaran",
    wall: "Pertukaran indah",
    safety: "Keselamatan dahulu: jangan ubat, alkohol, barang tiruan, barang mahal, wang tunai, haiwan, produk terkawal, atau alamat peribadi dalam hantaran awam.",
    success: "Pertukaran anda telah ditambah pada peranti ini."
  },
  my: {
    eyebrow: "လှပသောအရာများ ဖလှယ်ရန်",
    title: "သင့်နိုင်ငံမှ ပစ္စည်းအသေးလေးတစ်ခု မျှဝေပါ။ အခြားကမ္ဘာတစ်ခု၏ ပုံပြင်ကို ရယူပါ။",
    body: "ပိတ်ထားသော မုန့်၊ ပို့စ်ကတ်၊ စာအုပ်၊ ကျောင်းအမှတ်တရ၊ လက်မှုထုတ်ကုန် သို့မဟုတ် ယဉ်ကျေးမှုလက်ဆောင်များကို တင်နိုင်သည်။ သေးငယ်၊ လုံခြုံ၊ တရားဝင်ပြီး အဓိပ္ပါယ်ရှိပါစေ။",
    offer: "ကျွန်ုပ် မျှဝေနိုင်သည်",
    wish: "ကျွန်ုပ် ရယူလိုသည်",
    story: "နောက်ကွယ်က ပုံပြင်",
    shipping: "ဖလှယ်နည်း",
    name: "ပြသမည့် အမည်",
    country: "နိုင်ငံ",
    city: "တရုတ်ရှိ မြို့",
    itemTitle: "ဖလှယ်ခေါင်းစဉ်",
    submit: "ဖလှယ်မှု တင်ရန်",
    wall: "လှပသော ဖလှယ်မှုများ",
    safety: "လုံခြုံရေးဦးစားပေး: ဆေးဝါး၊ အရက်၊ အတုကုန်ပစ္စည်း၊ ဈေးကြီးပစ္စည်း၊ ငွေသား၊ တိရစ္ဆာန်၊ ထိန်းချုပ်ကုန်ပစ္စည်း၊ သီးသန့်လိပ်စာများ မတင်ပါနှင့်။",
    success: "သင့်ဖလှယ်မှုကို ဤစက်ပေါ်တွင် ထည့်ပြီးပါပြီ။"
  },
  km: {
    eyebrow: "ផ្លាស់ប្តូររបស់ស្អាត",
    title: "ចែករំលែកវត្ថុតូចមួយពីប្រទេសអ្នក។ ទទួលរឿងរ៉ាវពីពិភពរបស់អ្នកដទៃ។",
    body: "បង្ហោះអាហារបិទជិត កាតប៉ុស្តាល់ សៀវភៅ អនុស្សាវរីយ៍សាកលវិទ្យាល័យ សិប្បកម្ម ឬអំណោយវប្បធម៌។ តូច សុវត្ថិភាព ស្របច្បាប់ និងមានន័យ។",
    offer: "ខ្ញុំអាចចែករំលែក",
    wish: "ខ្ញុំចង់ទទួលបាន",
    story: "រឿងរ៉ាវខាងក្រោយ",
    shipping: "វិធីផ្លាស់ប្តូរ",
    name: "ឈ្មោះបង្ហាញ",
    country: "ប្រទេស",
    city: "ទីក្រុងនៅចិន",
    itemTitle: "ចំណងជើងផ្លាស់ប្តូរ",
    submit: "បង្ហោះការផ្លាស់ប្តូរ",
    wall: "ការផ្លាស់ប្តូរស្អាត",
    safety: "សុវត្ថិភាពជាមុន: កុំផ្លាស់ប្តូរឱសថ ស្រា ទំនិញក្លែងក្លាយ របស់ថ្លៃ សាច់ប្រាក់ សត្វ ផលិតផលគ្រប់គ្រង ឬអាសយដ្ឋានឯកជនក្នុងប្រកាសសាធារណៈ។",
    success: "ការផ្លាស់ប្តូររបស់អ្នកត្រូវបានបន្ថែមលើឧបករណ៍នេះ។"
  },
  lo: {
    eyebrow: "ແລກປ່ຽນສິ່ງດີງາມ",
    title: "ແບ່ງປັນຂອງນ້ອຍໆຈາກປະເທດຂອງທ່ານ. ຮັບເລື່ອງລາວຈາກໂລກຂອງຄົນອື່ນ.",
    body: "ສາມາດໂພສຂອງກິນປິດສະນິດ ໂປສກາດ ປຶ້ມ ຂອງທີ່ລະນຶກ ງານຝີມື ຫຼືຂອງຂວັນວັດທະນະທຳ. ນ້ອຍ ປອດໄພ ຖືກກົດໝາຍ ແລະມີຄວາມໝາຍ.",
    offer: "ຂ້ອຍສາມາດແບ່ງປັນ",
    wish: "ຂ້ອຍຢາກໄດ້ຮັບ",
    story: "ເລື່ອງລາວຂ້າງຫຼັງ",
    shipping: "ວິທີແລກປ່ຽນ",
    name: "ຊື່ທີ່ສະແດງ",
    country: "ປະເທດ",
    city: "ເມືອງໃນຈີນ",
    itemTitle: "ຫົວຂໍ້ແລກປ່ຽນ",
    submit: "ໂພສການແລກປ່ຽນ",
    wall: "ການແລກປ່ຽນດີງາມ",
    safety: "ຄວາມປອດໄພກ່ອນ: ບໍ່ແລກຢາ ເຫຼົ້າ ຂອງປອມ ຂອງແພງ ເງິນສົດ ສັດ ສິນຄ້າຄວບຄຸມ ຫຼືທີ່ຢູ່ສ່ວນຕົວໃນໂພສສາທາລະນະ.",
    success: "ການແລກປ່ຽນຂອງທ່ານຖືກເພີ່ມໃນອຸປະກອນນີ້ແລ້ວ."
  },
  tl: {
    eyebrow: "Magpalitan ng magagandang bagay",
    title: "Magbahagi ng maliit na bagay mula sa bansa mo. Tumanggap ng kuwento mula sa mundo ng iba.",
    body: "Mag-post ng sealed snacks, postcards, libro, campus souvenirs, handmade crafts, o cultural gifts. Maliit, ligtas, legal, at makabuluhan.",
    offer: "Maaari kong ibahagi",
    wish: "Gusto kong makatanggap",
    story: "Kuwento sa likod nito",
    shipping: "Paraan ng palitan",
    name: "Display name",
    country: "Bansa",
    city: "Lungsod sa Tsina",
    itemTitle: "Pamagat ng palitan",
    submit: "I-post ang palitan",
    wall: "Magagandang palitan",
    safety: "Safety first: walang gamot, alak, pekeng produkto, mamahaling bagay, cash, hayop, controlled products, o private address sa public posts.",
    success: "Naidagdag ang palitan mo sa device na ito."
  }
} as const;

function getCopy(locale: string) {
  return copy[locale as keyof typeof copy] ?? copy.en;
}

export function BeautyExchange({ locale }: { locale: string }) {
  const t = getCopy(locale);
  const [items, setItems] = useState<ExchangeItem[]>(starterItems);
  const [message, setMessage] = useState("");

  async function refreshItems() {
    const response = await fetch("/api/beauty-exchanges", { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json().catch(() => null);
    if (Array.isArray(data?.results)) setItems(data.results as ExchangeItem[]);
  }

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) setItems(JSON.parse(saved) as ExchangeItem[]);
    refreshItems().catch(() => undefined);
    const timer = window.setInterval(() => {
      refreshItems().catch(() => undefined);
    }, 10000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items]);

  const countries = useMemo(() => Array.from(new Set(items.map((item) => item.country))).sort(), [items]);

  async function submitExchange(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: ExchangeItem = {
      id: crypto.randomUUID(),
      ownerName: String(data.get("ownerName") ?? "").trim() || "SilkStudy friend",
      country: String(data.get("country") ?? "").trim() || "Global",
      city: String(data.get("city") ?? "").trim() || "China",
      title: String(data.get("title") ?? "").trim() || "A small cultural gift",
      offer: String(data.get("offer") ?? "").trim(),
      wish: String(data.get("wish") ?? "").trim(),
      story: String(data.get("story") ?? "").trim(),
      shipping: String(data.get("shipping") ?? "").trim() || "Public meetup or tracked delivery after confirmation.",
      createdAt: new Date().toISOString().slice(0, 10)
    };

    setItems((current) => [next, ...current]);
    await fetch("/api/beauty-exchanges", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next)
    }).then(() => refreshItems()).catch(() => undefined);
    form.reset();
    setMessage(t.success);
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
            <Gift size={18} aria-hidden="true" /> {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-ink">{t.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{t.body}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
            {countries.map((country) => (
              <span key={country} className="rounded bg-secondary/15 px-2 py-1 text-primary">{country}</span>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
          <div className="flex gap-2 font-bold"><ShieldCheck size={18} aria-hidden="true" /> Safety rules</div>
          <p className="mt-2">{t.safety}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <h3 className="text-lg font-bold text-ink">{t.wall}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <article key={item.id} className="rounded-lg border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">{item.country} · {item.city}</p>
                    <h4 className="mt-1 text-lg font-bold text-ink">{item.title}</h4>
                  </div>
                  <PackageCheck className="shrink-0 text-secondary" size={22} aria-hidden="true" />
                </div>
                <p className="mt-3 text-sm text-slate-700"><strong className="text-ink">{item.ownerName}</strong></p>
                <p className="mt-3 text-sm leading-6 text-slate-600"><strong className="text-ink">{t.offer}:</strong> {item.offer}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600"><strong className="text-ink">{t.wish}:</strong> {item.wish}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600"><strong className="text-ink">{t.story}:</strong> {item.story}</p>
                <p className="mt-3 rounded bg-surface px-3 py-2 text-xs font-semibold text-slate-600">{item.shipping}</p>
              </article>
            ))}
          </div>
        </div>

        <form onSubmit={submitExchange} className="h-fit rounded-lg border border-slate-200 bg-surface p-4">
          <div className="flex items-center gap-2">
            <HandHeart size={19} className="text-primary" aria-hidden="true" />
            <h3 className="font-bold text-ink">{t.eyebrow}</h3>
          </div>
          <div className="mt-4 grid gap-3">
            <input name="ownerName" required placeholder={t.name} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
            <input name="country" required placeholder={t.country} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
            <input name="city" required placeholder={t.city} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
            <input name="title" required minLength={6} placeholder={t.itemTitle} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
            <textarea name="offer" required minLength={10} rows={3} placeholder={t.offer} className="rounded-md border border-slate-200 px-3 py-2 text-sm" />
            <textarea name="wish" required minLength={8} rows={3} placeholder={t.wish} className="rounded-md border border-slate-200 px-3 py-2 text-sm" />
            <textarea name="story" required minLength={10} rows={3} placeholder={t.story} className="rounded-md border border-slate-200 px-3 py-2 text-sm" />
            <input name="shipping" placeholder={t.shipping} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
            <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white hover:bg-primary/90">
              <Send size={16} aria-hidden="true" /> {t.submit}
            </button>
            {message ? <p className="inline-flex gap-2 text-xs font-semibold text-emerald-700"><Sparkles size={15} aria-hidden="true" /> {message}</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
