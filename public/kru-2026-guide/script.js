const programButtons = document.querySelectorAll("[data-tab]");
const stages = document.querySelectorAll(".program-stage");

programButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.tab;
    programButtons.forEach((item) => item.classList.toggle("active", item === button));
    stages.forEach((stage) => stage.classList.toggle("active", stage.id === id));
  });
});

const admissionData = {
  bachelor: {
    title: "国内应往届高中毕业生及同等学历者",
    cost: "本科 4 年学费以学校当期标准为准；住宿费约 600-1500 元人民币/人/月；餐费约 10-20 元人民币/餐，实际费用以泰铢与当期汇率为准。",
    docs: ["申请表", "照片", "护照", "高中毕业证和成绩单", "英语成绩单", "申请费"],
  },
  master: {
    title: "国内应往届本科毕业生及同等学历者",
    cost: "硕士 2 年学费以学校当期标准为准；住宿费约 600-1500 元人民币/人/月；餐费约 10-20 元人民币/餐。",
    docs: ["个人简历", "本科成绩单", "本科学历证书或学位证书", "个人陈述", "推荐信", "语言能力证明", "护照复印件", "近期护照尺寸照片"],
  },
  joint: {
    title: "国内应往届本科毕业生及同等学历者",
    cost: "本硕 5 年学费以学校当期标准为准；住宿费约 600-1500 元人民币/人/月；餐费约 10-20 元人民币/餐。",
    docs: ["个人身份证明", "学历证明", "语言能力证明", "入学申请材料"],
  },
  doctor: {
    title: "国内应往届硕士毕业生及同等学历者",
    cost: "博士 3 年学费以学校当期标准为准；住宿费约 600-1500 元人民币/人/月；餐费约 10-20 元人民币/餐。",
    docs: ["申请表", "申请费", "个人简历", "成绩单", "推荐信", "学习签证"],
  },
};

const adCards = document.querySelectorAll("[data-admission]");
const adTitle = document.querySelector("#adTitle");
const adCost = document.querySelector("#adCost");
const adDocs = document.querySelector("#adDocs");

adCards.forEach((card) => {
  card.addEventListener("click", () => {
    const data = admissionData[card.dataset.admission];
    adCards.forEach((item) => item.classList.toggle("active", item === card));
    adTitle.textContent = data.title;
    adCost.textContent = data.cost;
    adDocs.innerHTML = data.docs.map((doc) => `<li>${doc}</li>`).join("");
  });
});

const progressBar = document.querySelector("#progressBar");

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  progressBar.style.width = `${Math.min(progress * 100, 100)}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxClose = lightbox.querySelector("button");

document.querySelectorAll("[data-lightbox]").forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.lightbox;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});
