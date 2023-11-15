// 點擊導覽列滾動至對應區塊
export default (id) => {
  const section = document.getElementById(id);
  let position = 'center';

  if (window.innerWidth <= 1024) {
    position = 'start';
  }
  section.scrollIntoView({ behavior: 'smooth', block: position });

  // 點擊後關閉導覽列
  if (window.innerWidth <= 1024) {
    const isShowSidebar = useShowSidebar();
    isShowSidebar.value = false;
  }
};
