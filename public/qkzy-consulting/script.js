const riskText = document.getElementById("riskText");
const riskCopy = {
  search: "以目标国家、产品结构和竞争对手为基础，建立专利检索范围，筛出高相关风险专利。",
  compare: "拆解权利要求，将产品技术特征与专利保护范围逐项比对，判断潜在侵权风险。",
  avoid: "根据风险点提出规避设计、替代结构、工艺调整或申请策略，降低进入市场的不确定性。",
  layout: "结合企业研发路线和海外市场节奏，规划 PCT、重点国家申请和防御性专利组合。"
};

document.querySelectorAll(".risk").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".risk").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    riskText.textContent = riskCopy[button.dataset.risk];
  });
});
