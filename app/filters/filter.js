/**
 *  格式化文章發布時間
 */
exports.customTime = (item) => {
  const nowTime = new Date().getTime();
  const minuteTime = 60 * 1000;
  const hourTime = 60 * minuteTime;
  const dayTime = 24 * hourTime;
  const monthTime = dayTime * 30;
  const yearTime = monthTime * 12;

  const publishTime = new Date(item).getTime();
  const historyTime = parseInt(nowTime) - parseInt(publishTime);
  let descTime;
  if (historyTime >= yearTime) {
    // 按年算
    descTime = `${parseInt(historyTime / yearTime)}年前`;
  } else if (historyTime < yearTime && historyTime >= monthTime) {
    // 按月算
    descTime = `${parseInt(historyTime / monthTime)}月前`;
  } else if (historyTime < monthTime && historyTime >= dayTime) {
    // 按天算
    descTime = `${parseInt(historyTime / dayTime)}天前`;
  } else if (historyTime < dayTime && historyTime >= hourTime) {
    // 按小时算
    descTime = `${parseInt(historyTime / hourTime)}小时前`;
  } else if (historyTime < hourTime && historyTime >= minuteTime) {
    // 按分钟算
    descTime = `${parseInt(historyTime / minuteTime)}分钟前`;
  } else {
    descTime = '刚刚';
  }
  return descTime;
};

exports.formatDate = (time) => {
  const tmpDate = new Date(time);
  const year = tmpDate.getFullYear();
  const mathon = tmpDate.getMonth() + 1;
  const day = tmpDate.getDate();
  const hours = tmpDate.getHours();
  const minutes = tmpDate.getMinutes();
  return `${year}.${mathon}.${day} ${hours}:${minutes}`;
};
