var the_list = []
$(".thing").each(function(i){
  link = $(this).find("a.title");
  console.log(link)
  if(link.attr("href")){
    the_list.push(link.attr("href"));
  }
});
chrome.extension.sendRequest({'message': "OPEN ALL THE TABS!", 'the_list': the_list});