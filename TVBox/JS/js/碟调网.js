var rule = {
  title: '碟调网',
  host: 'https://www.diediao2025.com',
  url: '/vodtype/fyclass-fypage.html',
  searchUrl: '/vodsearch/**----------fypage---.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'UC_UA',
  },
  class_parse: '.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;.*/(.*?).html',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
  double: true,
  一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: '.stui-content__detail .title&&Text;.stui-content__detail p:eq(-2)&&Text',
    img: '.stui-content__thumb .lazyload&&data-original',
    desc: '.stui-content__detail p:eq(0)&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text',
    content: '.detail&&Text',
    tabs: '.stui-pannel__head h3',
    lists: '.stui-content__playlist:eq(#id) li',
  },
  搜索: 'ul.stui-vodlist__media:eq(0),ul.stui-vodlist:eq(0),#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
  搜索1: 'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
  搜索2: 'ul.stui-vodlist__media&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
}