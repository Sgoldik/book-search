(function (_, Kotlin, $module$kotlin_react_dom, $module$kotlin_react, $module$kotlin_react_router_dom, $module$kotlinx_html_js, $module$kotlin_react_redux, $module$kotlin_extensions, $module$kotlin_redux, $module$redux) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var functionalComponent = $module$kotlin_react.react.functionalComponent_1klik0$;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var TH_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var TR_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
  var TBODY_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
  var TABLE_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
  var H2_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var navLink = $module$kotlin_react_router_dom.react.router.dom.navLink_bcialx$;
  var redirect = $module$kotlin_react_router_dom.react.router.dom.redirect_l8ye1a$;
  var route = $module$kotlin_react_router_dom.react.router.dom.route_9tkfd6$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var route_0 = $module$kotlin_react_router_dom.react.router.dom.route_oxctnt$;
  var switch_0 = $module$kotlin_react_router_dom.react.router.dom.switch_jg12zk$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var LI_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var UL_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var NAV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
  var HEADER_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var child = $module$kotlin_react.react.child_9r8yuv$;
  var IMG_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var TD_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var BUTTON_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var throwCCE = Kotlin.throwCCE;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var H3_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var TEXTAREA_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
  var OPTION_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
  var SELECT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
  var BR_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
  var rConnect = $module$kotlin_react_redux.react.redux.rConnect_aavpjk$;
  var getCallableRef = Kotlin.getCallableRef;
  var invoke = $module$kotlin_react.react.invoke_adv8my$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var rConnect_0 = $module$kotlin_react_redux.react.redux.rConnect_hfg8n2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_rClass = $module$kotlin_react.react.get_rClass_zdekks$;
  var rEnhancer = $module$kotlin_redux.redux.rEnhancer_287e2$;
  var compose = $module$redux.compose;
  var createStore = $module$redux.createStore;
  var hashRouter = $module$kotlin_react_router_dom.react.router.dom.hashRouter_jg12zk$;
  var provider = $module$kotlin_react_redux.react.redux.provider_6c40e8$;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var RAction = $module$kotlin_redux.redux.RAction;
  var plus = Kotlin.kotlin.collections.plus_e8164j$;
  var minus = Kotlin.kotlin.collections.minus_4pa84t$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function th$lambda(closure$scope, closure$classes) {
    return function (it) {
      return new TH_init(attributesMapOf(['scope', closure$scope != null ? enumEncode(closure$scope) : null, 'class', closure$classes]), it);
    };
  }
  function tr$lambda(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function tbody$lambda(closure$classes) {
    return function (it) {
      return new TBODY_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function table$lambda(closure$classes) {
    return function (it) {
      return new TABLE_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function AnyTableProps() {
  }
  AnyTableProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyTableProps',
    interfaces: []
  };
  function fAnyTable$lambda(closure$name, closure$rItem) {
    return function ($receiver, props) {
      var $receiver_0 = new RDOMBuilder_init(h2$lambda(null));
      $receiver_0.unaryPlus_pdl1vz$(closure$name);
      $receiver.child_2usv9w$($receiver_0.create());
      var classes = 'table-root';
      var $receiver_0_0 = new RDOMBuilder_init(div$lambda(classes));
      var closure$rItem_0 = closure$rItem;
      var $receiver_0_1 = new RDOMBuilder_init(table$lambda('any-table'));
      var $receiver_0_2 = new RDOMBuilder_init(tbody$lambda(null));
      var $receiver_0_3 = new RDOMBuilder_init(tr$lambda(null));
      console.log(props.objs);
      var $receiver_1 = props.titles;
      var destination = ArrayList_init($receiver_1.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_1.length; ++tmp$) {
        var item = $receiver_1[tmp$];
        var tmp$_0 = destination.add_11rb$;
        var $receiver_0_4 = new RDOMBuilder_init(th$lambda(null, null));
        console.log(item);
        $receiver_0_4.unaryPlus_pdl1vz$(item);
        tmp$_0.call(destination, $receiver_0_3.child_2usv9w$($receiver_0_4.create()));
      }
      $receiver_0_2.child_2usv9w$($receiver_0_3.create());
      closure$rItem_0($receiver_0_2, props.objs, props.sub1, props.sub2);
      $receiver_0_1.child_2usv9w$($receiver_0_2.create());
      $receiver_0_0.child_2usv9w$($receiver_0_1.create());
      $receiver.child_2usv9w$($receiver_0_0.create());
      return Unit;
    };
  }
  function fAnyTable(name, path, rItem) {
    return functionalComponent(fAnyTable$lambda(name, rItem));
  }
  function li$lambda(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function ul$lambda(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function nav$lambda(closure$classes) {
    return function (it) {
      return new NAV_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function header$lambda(closure$classes) {
    return function (it) {
      return new HEADER_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function AppProps() {
  }
  AppProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AppProps',
    interfaces: []
  };
  function RouteNumberResult() {
  }
  RouteNumberResult.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RouteNumberResult',
    interfaces: []
  };
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('\u041A\u043D\u0438\u0433\u0438');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043D\u0438\u0433\u0443');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('\u0410\u0432\u0442\u043E\u0440\u044B');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043A\u043D\u0438\u0433\u0438');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda(this$) {
    return function () {
      return this$.invoke_eb8iu4$(booksTableContainer, fApp$lambda$lambda$lambda$lambda);
    };
  }
  function fApp$lambda$lambda$lambda_0(closure$props) {
    return function (it) {
      return closure$props.books.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_0(closure$index, closure$book) {
    return function ($receiver) {
      $receiver.attrs.book = to(closure$index, closure$book);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_1(this$) {
    return function (index, book) {
      return this$.invoke_eb8iu4$(bookContainer, fApp$lambda$lambda$lambda$lambda_0(index, book));
    };
  }
  function fApp$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda_2(this$) {
    return function () {
      return this$.invoke_eb8iu4$(addBookContainer, fApp$lambda$lambda$lambda$lambda_1);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda_3(this$) {
    return function () {
      return this$.invoke_eb8iu4$(authorsTableContainer, fApp$lambda$lambda$lambda$lambda_2);
    };
  }
  function fApp$lambda$lambda$lambda_4(closure$props) {
    return function (it) {
      return closure$props.authors.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_3(closure$index, closure$author) {
    return function ($receiver) {
      $receiver.attrs.author = to(closure$index, closure$author);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_5(this$) {
    return function (index, author) {
      return this$.invoke_eb8iu4$(authorContainer, fApp$lambda$lambda$lambda$lambda_3(index, author));
    };
  }
  function fApp$lambda$lambda$lambda$lambda_4($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda_6(this$) {
    return function () {
      return this$.invoke_eb8iu4$(favsTableContainer, fApp$lambda$lambda$lambda$lambda_4);
    };
  }
  function fApp$lambda$lambda(closure$props) {
    return function ($receiver) {
      redirect($receiver, '/', 'books', true, true, true);
      route($receiver, '/books', true, void 0, fApp$lambda$lambda$lambda($receiver));
      route_0($receiver, '/books/:number', true, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_0(closure$props), fApp$lambda$lambda$lambda_1($receiver)));
      route($receiver, '/addBook', true, void 0, fApp$lambda$lambda$lambda_2($receiver));
      route($receiver, '/authors', true, void 0, fApp$lambda$lambda$lambda_3($receiver));
      route_0($receiver, '/authors/:number', true, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_4(closure$props), fApp$lambda$lambda$lambda_5($receiver)));
      route($receiver, '/favs', true, void 0, fApp$lambda$lambda$lambda_6($receiver));
      return Unit;
    };
  }
  function fApp$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(header$lambda(null));
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('\u041A\u043D\u0438\u0433\u043E\u041F\u043E\u0438\u0441\u043A');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(nav$lambda(null));
    var $receiver_0_2 = new RDOMBuilder_init(ul$lambda('navigation'));
    var $receiver_0_3 = new RDOMBuilder_init(li$lambda('navigation-item'));
    navLink($receiver_0_3, '/books', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda);
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    var $receiver_0_4 = new RDOMBuilder_init(li$lambda('navigation-item'));
    navLink($receiver_0_4, '/addBook', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda_0);
    $receiver_0_2.child_2usv9w$($receiver_0_4.create());
    var $receiver_0_5 = new RDOMBuilder_init(li$lambda('navigation-item'));
    navLink($receiver_0_5, '/authors', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda_1);
    $receiver_0_2.child_2usv9w$($receiver_0_5.create());
    var $receiver_0_6 = new RDOMBuilder_init(li$lambda('navigation-item'));
    navLink($receiver_0_6, '/favs', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda_2);
    $receiver_0_2.child_2usv9w$($receiver_0_6.create());
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    $receiver.child_2usv9w$($receiver_0.create());
    switch_0($receiver, fApp$lambda$lambda(props));
    return Unit;
  }
  function fApp() {
    return functionalComponent(fApp$lambda);
  }
  function renderObject$lambda(closure$selector, closure$rElement, this$renderObject) {
    return function (route_props) {
      var tmp$;
      var num = (tmp$ = toIntOrNull(route_props.match.params.number)) != null ? tmp$ : -1;
      var obj = closure$selector(num);
      var tmp$_0;
      if (obj != null)
        tmp$_0 = closure$rElement(num, obj);
      else {
        var $receiver = this$renderObject;
        var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
        $receiver_0.unaryPlus_pdl1vz$('Object not found');
        tmp$_0 = $receiver.child_2usv9w$($receiver_0.create());
      }
      return tmp$_0;
    };
  }
  function renderObject($receiver, selector, rElement) {
    return renderObject$lambda(selector, rElement, $receiver);
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function td$lambda(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function tr$lambda_0(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function li$lambda_0(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function ul$lambda_0(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function h2$lambda_0(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function AuthorTableItemProps() {
  }
  AuthorTableItemProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AuthorTableItemProps',
    interfaces: []
  };
  function fAuthorTableItem$lambda$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = new RDOMBuilder_init(button$lambda(null, null, null, 'book-button'));
    $receiver_0.unaryPlus_pdl1vz$('\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435');
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  function fAuthorTableItem$lambda($receiver, props) {
    var $receiver_0 = props.authors.values;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var $receiver_0_0 = new RDOMBuilder_init(tr$lambda_0(null));
      var $receiver_0_1 = new RDOMBuilder_init(td$lambda('book-image'));
      var $receiver_0_2 = new RDOMBuilder_init(img$lambda('img', item.photo, 'book-image-pic'));
      $receiver_0_1.child_2usv9w$($receiver_0_2.create());
      $receiver_0_0.child_2usv9w$($receiver_0_1.create());
      var $receiver_1 = item.getProperies();
      var destination_0 = ArrayList_init($receiver_1.length);
      var tmp$_2, tmp$_0_0;
      var index_1 = 0;
      for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
        var item_0 = $receiver_1[tmp$_2];
        var tmp$_3 = destination_0.add_11rb$;
        index_1 = index_1 + 1 | 0;
        var $receiver_0_3 = new RDOMBuilder_init(td$lambda(null));
        $receiver_0_3.unaryPlus_pdl1vz$(item_0.toString());
        tmp$_3.call(destination_0, $receiver_0_0.child_2usv9w$($receiver_0_3.create()));
      }
      var $receiver_0_4 = new RDOMBuilder_init(td$lambda(null));
      navLink($receiver_0_4, '/authors/' + index_0, void 0, void 0, void 0, void 0, void 0, void 0, fAuthorTableItem$lambda$lambda$lambda$lambda$lambda);
      $receiver_0_0.child_2usv9w$($receiver_0_4.create());
      tmp$_1.call(destination, $receiver.child_2usv9w$($receiver_0_0.create()));
    }
    return Unit;
  }
  function fAuthorTableItem() {
    return functionalComponent(fAuthorTableItem$lambda);
  }
  function authorTableItem$lambda(closure$authors, closure$books, closure$genres) {
    return function ($receiver) {
      $receiver.attrs.authors = closure$authors;
      $receiver.attrs.books = closure$books;
      $receiver.attrs.genres = closure$genres;
      return Unit;
    };
  }
  function authorTableItem($receiver, authors, books, genres) {
    return child($receiver, withDisplayName_0('Author Table Item', fAuthorTableItem()), void 0, authorTableItem$lambda(authors, books, genres));
  }
  function AuthorProps() {
  }
  AuthorProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AuthorProps',
    interfaces: []
  };
  function fAuthor$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$book) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$book.name);
      return Unit;
    };
  }
  function fAuthor$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(h2$lambda_0(null));
    $receiver_0.unaryPlus_pdl1vz$(props.author.second.toString());
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_0('book-more'));
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda_0('book-more-img'));
    var $receiver_0_2 = new RDOMBuilder_init(img$lambda(props.author.toString(), props.author.second.photo, 'book-more-pic'));
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    $receiver_0_0.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_3 = new RDOMBuilder_init(div$lambda_0('author-books'));
    $receiver_0_3.unaryPlus_pdl1vz$('\u041A\u043D\u0438\u0433\u0438 \u0430\u0432\u0442\u043E\u0440\u0430:');
    var $receiver_0_4 = new RDOMBuilder_init(ul$lambda_0(null));
    var $receiver_1 = props.books.values;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var $receiver_0_5 = new RDOMBuilder_init(li$lambda_0(null));
      navLink($receiver_0_5, '/books/' + index_0, void 0, void 0, void 0, void 0, void 0, void 0, fAuthor$lambda$lambda$lambda$lambda$lambda$lambda$lambda(item));
      tmp$_1.call(destination, $receiver_0_4.child_2usv9w$($receiver_0_5.create()));
    }
    $receiver_0_3.child_2usv9w$($receiver_0_4.create());
    $receiver_0_3.unaryPlus_pdl1vz$('\u041A\u043D\u0438\u0433 \u0430\u0432\u0442\u043E\u0440\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435: ' + props.books.values.size);
    $receiver_0_0.child_2usv9w$($receiver_0_3.create());
    $receiver.child_2usv9w$($receiver_0_0.create());
    return Unit;
  }
  var fAuthor;
  function author$lambda(closure$author, closure$books) {
    return function ($receiver) {
      $receiver.attrs.author = closure$author;
      $receiver.attrs.books = closure$books;
      return Unit;
    };
  }
  function author($receiver, author, books) {
    return child($receiver, fAuthor, void 0, author$lambda(author, books));
  }
  function img$lambda_0(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function button$lambda_0(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function td$lambda_0(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function tr$lambda_1(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function div$lambda_1(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function h2$lambda_1(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function textArea$lambda(closure$rows, closure$cols, closure$wrap, closure$classes) {
    return function (it) {
      return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null, 'class', closure$classes]), it);
    };
  }
  function p$lambda_0(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function option$lambda(closure$classes) {
    return function (it) {
      return new OPTION_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function select$lambda(closure$classes) {
    return function (it) {
      return new SELECT_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function br$lambda(closure$classes) {
    return function (it) {
      return new BR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function BookTableItemProps() {
  }
  BookTableItemProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BookTableItemProps',
    interfaces: []
  };
  function fBookTableItem$lambda$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = new RDOMBuilder_init(button$lambda_0(null, null, null, 'book-button'));
    $receiver_0.unaryPlus_pdl1vz$('\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435');
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  function fBookTableItem$lambda($receiver, props) {
    var $receiver_0 = props.books;
    var destination = ArrayList_init($receiver_0.size);
    var tmp$;
    tmp$ = $receiver_0.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0_0 = new RDOMBuilder_init(tr$lambda_1(null));
      var $receiver_0_1 = new RDOMBuilder_init(td$lambda_0('book-image'));
      var $receiver_0_2 = new RDOMBuilder_init(img$lambda_0('img', item.value.image, 'book-image-pic'));
      $receiver_0_1.child_2usv9w$($receiver_0_2.create());
      $receiver_0_0.child_2usv9w$($receiver_0_1.create());
      var $receiver_0_3 = new RDOMBuilder_init(td$lambda_0(null));
      $receiver_0_3.unaryPlus_pdl1vz$(item.value.name);
      $receiver_0_0.child_2usv9w$($receiver_0_3.create());
      var $receiver_0_4 = new RDOMBuilder_init(td$lambda_0(null));
      $receiver_0_4.unaryPlus_pdl1vz$(getValue(props.authors, item.value.author).toString());
      $receiver_0_0.child_2usv9w$($receiver_0_4.create());
      var $receiver_0_5 = new RDOMBuilder_init(td$lambda_0(null));
      $receiver_0_5.unaryPlus_pdl1vz$(item.value.created);
      $receiver_0_0.child_2usv9w$($receiver_0_5.create());
      var $receiver_0_6 = new RDOMBuilder_init(td$lambda_0(null));
      $receiver_0_6.unaryPlus_pdl1vz$(getValue(props.genres, item.value.genre).toString());
      $receiver_0_0.child_2usv9w$($receiver_0_6.create());
      var $receiver_0_7 = new RDOMBuilder_init(td$lambda_0(null));
      navLink($receiver_0_7, '/books/' + item.key, void 0, void 0, void 0, void 0, void 0, void 0, fBookTableItem$lambda$lambda$lambda$lambda$lambda);
      $receiver_0_0.child_2usv9w$($receiver_0_7.create());
      tmp$_0.call(destination, $receiver.child_2usv9w$($receiver_0_0.create()));
    }
    return Unit;
  }
  function fBookTableItem() {
    return functionalComponent(fBookTableItem$lambda);
  }
  function bookTableItem$lambda(closure$books, closure$authors, closure$genres) {
    return function ($receiver) {
      $receiver.attrs.books = closure$books;
      $receiver.attrs.authors = closure$authors;
      $receiver.attrs.genres = closure$genres;
      return Unit;
    };
  }
  function bookTableItem($receiver, books, authors, genres) {
    return child($receiver, withDisplayName_0('Table Item', fBookTableItem()), void 0, bookTableItem$lambda(books, authors, genres));
  }
  function BookProps() {
  }
  BookProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BookProps',
    interfaces: []
  };
  function fBook$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      closure$props.addFav(closure$props.book.first);
      return Unit;
    };
  }
  function fBook$lambda$lambda$lambda$lambda$lambda_0(closure$props) {
    return function (it) {
      var tmp$, tmp$_0;
      console.log('click');
      var inputElement = Kotlin.isType(tmp$ = document.getElementById('review-name-' + closure$props.book.first + '-add'), HTMLInputElement) ? tmp$ : throwCCE();
      var textAreaElement = Kotlin.isType(tmp$_0 = document.getElementById('review-description-' + closure$props.book.first + '-add'), HTMLTextAreaElement) ? tmp$_0 : throwCCE();
      console.log(inputElement.value, textAreaElement.value);
      closure$props.addReview(new Review(inputElement.value, closure$props.book.first, textAreaElement.value));
      return Unit;
    };
  }
  function fBook$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(h2$lambda_1(null));
    $receiver_0.unaryPlus_pdl1vz$(props.book.second.name);
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_1('book-more'));
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda_1('book-more-img'));
    var $receiver_0_2 = new RDOMBuilder_init(img$lambda_0(props.book.second.name, props.book.second.image, 'book-more-pic'));
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    $receiver_0_0.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_3 = new RDOMBuilder_init(div$lambda_1('book-more-desc'));
    var $receiver_0_4 = new RDOMBuilder_init(div$lambda_1('book-more-desc-item'));
    $receiver_0_4.unaryPlus_pdl1vz$('\u0410\u0432\u0442\u043E\u0440: ' + props.author.toString());
    $receiver_0_3.child_2usv9w$($receiver_0_4.create());
    var $receiver_0_5 = new RDOMBuilder_init(div$lambda_1('book-more-desc-item'));
    $receiver_0_5.unaryPlus_pdl1vz$('\u0416\u0430\u043D\u0440: ' + props.genre.name);
    $receiver_0_3.child_2usv9w$($receiver_0_5.create());
    var $receiver_0_6 = new RDOMBuilder_init(div$lambda_1('book-more-desc-item'));
    $receiver_0_6.unaryPlus_pdl1vz$('\u0414\u0430\u0442\u0430 \u0438\u0437\u0434\u0430\u043D\u0438\u044F: ' + props.book.second.created);
    $receiver_0_3.child_2usv9w$($receiver_0_6.create());
    var $receiver_0_7 = new RDOMBuilder_init(button$lambda_0(null, null, null, 'book-button'));
    if (props.isFav)
      $receiver_0_7.unaryPlus_pdl1vz$('\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E');
    else
      $receiver_0_7.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435');
    console.log(props.isFav);
    set_onClickFunction($receiver_0_7.attrs, fBook$lambda$lambda$lambda$lambda$lambda(props));
    $receiver_0_3.child_2usv9w$($receiver_0_7.create());
    $receiver_0_0.child_2usv9w$($receiver_0_3.create());
    $receiver.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_8 = new RDOMBuilder_init(div$lambda_1('reviews'));
    if (!props.reviews.isEmpty()) {
      var $receiver_0_9 = new RDOMBuilder_init(div$lambda_1(null));
      var $receiver_0_10 = new RDOMBuilder_init(h2$lambda_1(null));
      $receiver_0_10.unaryPlus_pdl1vz$('\u0420\u0435\u0446\u0435\u043D\u0437\u0438\u0438');
      $receiver_0_9.child_2usv9w$($receiver_0_10.create());
      var $receiver_1 = props.reviews.values;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$;
      tmp$ = $receiver_1.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(review($receiver_0_9, item));
      }
      $receiver_0_8.child_2usv9w$($receiver_0_9.create());
    } else {
      var $receiver_0_11 = new RDOMBuilder_init(p$lambda_0(null));
      $receiver_0_8.child_2usv9w$($receiver_0_11.create());
    }
    var $receiver_0_12 = new RDOMBuilder_init(div$lambda_1('review-container'));
    var $receiver_0_13 = new RDOMBuilder_init(h2$lambda_1(null));
    $receiver_0_13.unaryPlus_pdl1vz$('\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0446\u0435\u043D\u0437\u0438\u044E');
    $receiver_0_12.child_2usv9w$($receiver_0_13.create());
    var $receiver_0_14 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_14.unaryPlus_pdl1vz$('\u0412\u0430\u0448\u0435 \u0438\u043C\u044F');
    $receiver_0_12.child_2usv9w$($receiver_0_14.create());
    var $receiver_0_15 = new RDOMBuilder_init(input$lambda(null, null, null, null, 'review-input'));
    set_id($receiver_0_15.attrs, 'review-name-' + props.book.first + '-add');
    $receiver_0_12.child_2usv9w$($receiver_0_15.create());
    var $receiver_0_16 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_16.unaryPlus_pdl1vz$('\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439');
    $receiver_0_12.child_2usv9w$($receiver_0_16.create());
    var $receiver_0_17 = new RDOMBuilder_init(textArea$lambda(null, null, null, 'review-field'));
    set_id($receiver_0_17.attrs, 'review-description-' + props.book.first + '-add');
    $receiver_0_12.child_2usv9w$($receiver_0_17.create());
    var $receiver_0_18 = new RDOMBuilder_init(button$lambda_0(null, null, null, 'book-button'));
    $receiver_0_18.unaryPlus_pdl1vz$('\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C');
    set_onClickFunction($receiver_0_18.attrs, fBook$lambda$lambda$lambda$lambda$lambda_0(props));
    $receiver_0_12.child_2usv9w$($receiver_0_18.create());
    $receiver_0_8.child_2usv9w$($receiver_0_12.create());
    $receiver.child_2usv9w$($receiver_0_8.create());
    return Unit;
  }
  var fBook;
  function book$lambda(closure$book, closure$author, closure$genre, closure$reviews, closure$isFav, closure$addFav, closure$addReview) {
    return function ($receiver) {
      $receiver.attrs.book = closure$book;
      $receiver.attrs.author = closure$author;
      $receiver.attrs.genre = closure$genre;
      $receiver.attrs.reviews = closure$reviews;
      $receiver.attrs.isFav = closure$isFav;
      $receiver.attrs.addFav = closure$addFav;
      $receiver.attrs.addReview = closure$addReview;
      return Unit;
    };
  }
  function book($receiver, book, author, genre, reviews, isFav, addFav, addReview) {
    return child($receiver, fBook, void 0, book$lambda(book, author, genre, reviews, isFav, addFav, addReview));
  }
  function AddBookProps() {
  }
  AddBookProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AddBookProps',
    interfaces: []
  };
  function fAddBook$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      console.log('click');
      var name = Kotlin.isType(tmp$ = document.getElementById('book-name-add'), HTMLInputElement) ? tmp$ : throwCCE();
      var author = Kotlin.isType(tmp$_0 = document.getElementById('book-author-add'), HTMLSelectElement) ? tmp$_0 : throwCCE();
      var genre = Kotlin.isType(tmp$_1 = document.getElementById('book-genre-add'), HTMLSelectElement) ? tmp$_1 : throwCCE();
      var created = Kotlin.isType(tmp$_2 = document.getElementById('book-created-add'), HTMLInputElement) ? tmp$_2 : throwCCE();
      var image = Kotlin.isType(tmp$_3 = document.getElementById('book-image-add'), HTMLInputElement) ? tmp$_3 : throwCCE();
      closure$props.addBook(new Book(name.value, toInt(author.value), created.value, image.value, toInt(genre.value)));
      window.history.back();
      return Unit;
    };
  }
  function fAddBook$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_1(null));
    var $receiver_0_0 = new RDOMBuilder_init(h2$lambda_1(null));
    $receiver_0_0.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043D\u0438\u0433\u0443');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$('\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043D\u0438\u0433\u0438');
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_2 = new RDOMBuilder_init(input$lambda(null, null, null, null, 'review-input'));
    set_id($receiver_0_2.attrs, 'book-name-add');
    $receiver_0.child_2usv9w$($receiver_0_2.create());
    var $receiver_0_3 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_3.unaryPlus_pdl1vz$('\u0418\u043C\u044F \u0430\u0432\u0442\u043E\u0440\u0430');
    $receiver_0.child_2usv9w$($receiver_0_3.create());
    var $receiver_0_4 = new RDOMBuilder_init(select$lambda('review-input'));
    set_id($receiver_0_4.attrs, 'book-author-add');
    var $receiver_1 = props.authors.values;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var $receiver_0_5 = new RDOMBuilder_init(option$lambda(null));
      $receiver_0_5.attrs.value = index_0.toString();
      $receiver_0_5.unaryPlus_pdl1vz$(item.toString());
      tmp$_1.call(destination, $receiver_0_4.child_2usv9w$($receiver_0_5.create()));
    }
    $receiver_0.child_2usv9w$($receiver_0_4.create());
    var $receiver_0_6 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_6.unaryPlus_pdl1vz$('\u0416\u0430\u043D\u0440');
    $receiver_0.child_2usv9w$($receiver_0_6.create());
    var $receiver_0_7 = new RDOMBuilder_init(select$lambda('review-input'));
    set_id($receiver_0_7.attrs, 'book-genre-add');
    var $receiver_2 = props.genres.values;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_2, tmp$_0_0;
    var index_1 = 0;
    tmp$_2 = $receiver_2.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      var tmp$_3 = destination_0.add_11rb$;
      var index_2 = checkIndexOverflow((tmp$_0_0 = index_1, index_1 = tmp$_0_0 + 1 | 0, tmp$_0_0));
      var $receiver_0_8 = new RDOMBuilder_init(option$lambda(null));
      $receiver_0_8.attrs.value = index_2.toString();
      $receiver_0_8.unaryPlus_pdl1vz$(item_0.toString());
      tmp$_3.call(destination_0, $receiver_0_7.child_2usv9w$($receiver_0_8.create()));
    }
    $receiver_0.child_2usv9w$($receiver_0_7.create());
    var $receiver_0_9 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_9.unaryPlus_pdl1vz$('\u0413\u043E\u0434 \u0438\u0437\u0434\u0430\u043D\u0438\u044F');
    $receiver_0.child_2usv9w$($receiver_0_9.create());
    var $receiver_0_10 = new RDOMBuilder_init(input$lambda(null, null, null, null, 'review-input'));
    set_id($receiver_0_10.attrs, 'book-created-add');
    $receiver_0.child_2usv9w$($receiver_0_10.create());
    var $receiver_0_11 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_11.unaryPlus_pdl1vz$('\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435');
    $receiver_0.child_2usv9w$($receiver_0_11.create());
    var $receiver_0_12 = new RDOMBuilder_init(input$lambda(null, null, null, null, 'review-input'));
    set_id($receiver_0_12.attrs, 'book-image-add');
    $receiver_0.child_2usv9w$($receiver_0_12.create());
    var $receiver_0_13 = new RDOMBuilder_init(br$lambda(null));
    $receiver_0.child_2usv9w$($receiver_0_13.create());
    var $receiver_0_14 = new RDOMBuilder_init(button$lambda_0(null, null, null, 'book-button'));
    $receiver_0_14.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C');
    set_onClickFunction($receiver_0_14.attrs, fAddBook$lambda$lambda$lambda$lambda(props));
    $receiver_0.child_2usv9w$($receiver_0_14.create());
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fAddBook;
  function addBook$lambda(closure$authors, closure$genres, closure$addBook) {
    return function ($receiver) {
      $receiver.attrs.authors = closure$authors;
      $receiver.attrs.genres = closure$genres;
      $receiver.attrs.addBook = closure$addBook;
      return Unit;
    };
  }
  function addBook($receiver, authors, genres, addBook) {
    return child($receiver, fAddBook, void 0, addBook$lambda(authors, genres, addBook));
  }
  function img$lambda_1(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function button$lambda_1(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function td$lambda_1(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function tr$lambda_2(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function favsProps() {
  }
  favsProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'favsProps',
    interfaces: []
  };
  function fFavs$lambda$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = new RDOMBuilder_init(button$lambda_1(null, null, null, 'book-button'));
    $receiver_0.unaryPlus_pdl1vz$('\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435');
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  function fFavs$lambda($receiver, props) {
    var $receiver_0 = props.books;
    var destination = ArrayList_init($receiver_0.size);
    var tmp$;
    tmp$ = $receiver_0.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0_0 = new RDOMBuilder_init(tr$lambda_2(null));
      var $receiver_0_1 = new RDOMBuilder_init(td$lambda_1('book-image'));
      var $receiver_0_2 = new RDOMBuilder_init(img$lambda_1('img', item.value.image, 'book-image-pic'));
      $receiver_0_1.child_2usv9w$($receiver_0_2.create());
      $receiver_0_0.child_2usv9w$($receiver_0_1.create());
      var $receiver_0_3 = new RDOMBuilder_init(td$lambda_1(null));
      $receiver_0_3.unaryPlus_pdl1vz$(item.value.name);
      $receiver_0_0.child_2usv9w$($receiver_0_3.create());
      var $receiver_0_4 = new RDOMBuilder_init(td$lambda_1(null));
      $receiver_0_4.unaryPlus_pdl1vz$(item.value.created);
      $receiver_0_0.child_2usv9w$($receiver_0_4.create());
      var $receiver_0_5 = new RDOMBuilder_init(td$lambda_1(null));
      navLink($receiver_0_5, '/books/' + item.key, void 0, void 0, void 0, void 0, void 0, void 0, fFavs$lambda$lambda$lambda$lambda$lambda);
      $receiver_0_0.child_2usv9w$($receiver_0_5.create());
      tmp$_0.call(destination, $receiver.child_2usv9w$($receiver_0_0.create()));
    }
    return Unit;
  }
  var fFavs;
  function favs$lambda(closure$books, closure$authors, closure$genres) {
    return function ($receiver) {
      $receiver.attrs.books = closure$books;
      $receiver.attrs.authors = closure$authors;
      $receiver.attrs.genres = closure$genres;
      return Unit;
    };
  }
  function favs($receiver, books, authors, genres) {
    return child($receiver, fFavs, void 0, favs$lambda(books, authors, genres));
  }
  function td$lambda_2(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function button$lambda_2(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function tr$lambda_3(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function li$lambda_1(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function ul$lambda_1(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function div$lambda_2(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function GenreTableItemProps() {
  }
  GenreTableItemProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GenreTableItemProps',
    interfaces: []
  };
  function fGenreTableItem$lambda$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = new RDOMBuilder_init(button$lambda_2(null, null, null, 'book-button'));
    $receiver_0.unaryPlus_pdl1vz$('\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435');
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  function fGenreTableItem$lambda($receiver, props) {
    var $receiver_0 = props.genres.values;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var $receiver_0_0 = new RDOMBuilder_init(tr$lambda_3(null));
      var $receiver_1 = item.getProperies();
      var destination_0 = ArrayList_init($receiver_1.length);
      var tmp$_2, tmp$_0_0;
      var index_1 = 0;
      for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
        var item_0 = $receiver_1[tmp$_2];
        var tmp$_3 = destination_0.add_11rb$;
        index_1 = index_1 + 1 | 0;
        var $receiver_0_1 = new RDOMBuilder_init(td$lambda_2(null));
        $receiver_0_1.unaryPlus_pdl1vz$(item_0.toString());
        tmp$_3.call(destination_0, $receiver_0_0.child_2usv9w$($receiver_0_1.create()));
      }
      var $receiver_0_2 = new RDOMBuilder_init(td$lambda_2(null));
      navLink($receiver_0_2, '/genres/' + index_0, void 0, void 0, void 0, void 0, void 0, void 0, fGenreTableItem$lambda$lambda$lambda$lambda$lambda);
      $receiver_0_0.child_2usv9w$($receiver_0_2.create());
      tmp$_1.call(destination, $receiver.child_2usv9w$($receiver_0_0.create()));
    }
    return Unit;
  }
  function fGenreTableItem() {
    return functionalComponent(fGenreTableItem$lambda);
  }
  function genreTableItem$lambda(closure$genres) {
    return function ($receiver) {
      $receiver.attrs.genres = closure$genres;
      return Unit;
    };
  }
  function genreTableItem($receiver, genres) {
    return child($receiver, withDisplayName_0('Genre Table Item', fGenreTableItem()), void 0, genreTableItem$lambda(genres));
  }
  function GenreProps() {
  }
  GenreProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GenreProps',
    interfaces: []
  };
  function fGenre$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_2('book-more'));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_2('book-more-desc'));
    $receiver_0_0.unaryPlus_pdl1vz$('\u041A\u043D\u0438\u0433\u0438 \u044D\u0442\u043E\u0433\u043E \u0436\u0430\u043D\u0440\u0430: ');
    var $receiver_0_1 = new RDOMBuilder_init(ul$lambda_1(null));
    var $receiver_1 = props.books;
    var destination = ArrayList_init($receiver_1.length);
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver_1.length; ++tmp$) {
      var item = $receiver_1[tmp$];
      var tmp$_1 = destination.add_11rb$;
      index = index + 1 | 0;
      if (item != null) {
        var $receiver_0_2 = new RDOMBuilder_init(li$lambda_1(null));
        $receiver_0_2.unaryPlus_pdl1vz$(item.name);
        $receiver_0_1.child_2usv9w$($receiver_0_2.create());
      }tmp$_1.call(destination, Unit);
    }
    $receiver_0_0.child_2usv9w$($receiver_0_1.create());
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fGenre;
  function genre$lambda(closure$genre, closure$books) {
    return function ($receiver) {
      $receiver.attrs.genre = closure$genre;
      $receiver.attrs.books = closure$books;
      return Unit;
    };
  }
  function genre($receiver, genre, books) {
    return child($receiver, fGenre, void 0, genre$lambda(genre, books));
  }
  function h3$lambda_0(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function p$lambda_1(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function div$lambda_3(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function ReviewProps() {
  }
  ReviewProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReviewProps',
    interfaces: []
  };
  function fReview$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_3('review'));
    var $receiver_0_0 = new RDOMBuilder_init(h3$lambda_0(null));
    $receiver_0_0.unaryPlus_pdl1vz$(props.review.author);
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(p$lambda_1(null));
    $receiver_0_1.unaryPlus_pdl1vz$(props.review.review);
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fReview;
  function review$lambda(closure$review) {
    return function ($receiver) {
      $receiver.attrs.review = closure$review;
      return Unit;
    };
  }
  function review($receiver, review) {
    return child($receiver, fReview, void 0, review$lambda(review));
  }
  function AnyTableDispatchProps() {
  }
  AnyTableDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyTableDispatchProps',
    interfaces: []
  };
  function AnyTableStateProps() {
  }
  AnyTableStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyTableStateProps',
    interfaces: []
  };
  function authorsTableHOC$lambda($receiver, state, f) {
    $receiver.objs = state.authors;
    $receiver.titles = ['\u041F\u0440\u0435\u0432\u044C\u044E', '\u0418\u043C\u044F \u0430\u0432\u0442\u043E\u0440\u0430', '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F'];
    return Unit;
  }
  function authorsTableHOC$lambda_0($receiver, dispatch, f) {
    return Unit;
  }
  var authorsTableHOC;
  var authorTableRClass;
  var authorsTableContainer;
  function booksTableContainer$lambda($receiver, state, f) {
    $receiver.objs = state.books;
    $receiver.titles = ['\u041F\u0440\u0435\u0432\u044C\u044E', '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435', '\u0410\u0432\u0442\u043E\u0440', '\u0413\u043E\u0434 \u0438\u0437\u0434\u0430\u043D\u0438\u044F', '\u0416\u0430\u043D\u0440', '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F'];
    $receiver.sub1 = state.authors;
    $receiver.sub2 = state.genres;
    return Unit;
  }
  function booksTableContainer$lambda_0($receiver, dispatch, f) {
    return Unit;
  }
  var booksTableContainer;
  function favsTableContainer$lambda($receiver, state, f) {
    var $receiver_0 = state.favs;
    var destination = ArrayList_init($receiver_0.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var item = $receiver_0[tmp$];
      destination.add_11rb$(to(item, getValue(state.books, item)));
    }
    $receiver.objs = toMap(destination);
    $receiver.titles = ['\u041F\u0440\u0435\u0432\u044C\u044E', '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435', '\u0414\u0430\u0442\u0430 \u0438\u0437\u0434\u0430\u043D\u0438\u044F', '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F'];
    return Unit;
  }
  function favsTableContainer$lambda_0($receiver, dispatch, f) {
    return Unit;
  }
  var favsTableContainer;
  function appContainer$lambda($receiver, state, f) {
    $receiver.books = state.books;
    $receiver.authors = state.authors;
    return Unit;
  }
  function appContainer$lambda_0($receiver) {
    $receiver.pure = false;
    return Unit;
  }
  var appContainer;
  function AuthorDispatchProps() {
  }
  AuthorDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AuthorDispatchProps',
    interfaces: []
  };
  function AuthorStateProps() {
  }
  AuthorStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AuthorStateProps',
    interfaces: []
  };
  function AuthorOwnProps() {
  }
  AuthorOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AuthorOwnProps',
    interfaces: []
  };
  function authorContainer$lambda($receiver, state, ownProps) {
    var $receiver_0 = state.books;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.value.author === ownProps.author.first) {
        destination.put_xwzc9p$(element.key, element.value);
      }}
    $receiver.books = destination;
    return Unit;
  }
  function authorContainer$lambda_0($receiver, dispatch, ownProps) {
    return Unit;
  }
  var authorContainer;
  function BookDispatchProps() {
  }
  BookDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BookDispatchProps',
    interfaces: []
  };
  function BookStateProps() {
  }
  BookStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BookStateProps',
    interfaces: []
  };
  function BookOwnProps() {
  }
  BookOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BookOwnProps',
    interfaces: []
  };
  function bookContainer$lambda($receiver, state, ownProps) {
    $receiver.author = getValue(state.authors, ownProps.book.second.author);
    $receiver.genre = getValue(state.genres, ownProps.book.second.genre);
    var $receiver_0 = state.reviews;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.value.book === ownProps.book.first) {
        destination.put_xwzc9p$(element.key, element.value);
      }}
    $receiver.reviews = destination;
    $receiver.isFav = contains(state.favs, ownProps.book.first);
    return Unit;
  }
  function bookContainer$lambda$lambda(closure$dispatch) {
    return function (it) {
      closure$dispatch(new ChangeFav(it));
      return Unit;
    };
  }
  function bookContainer$lambda$lambda_0(closure$dispatch) {
    return function (it) {
      closure$dispatch(new AddReview(it));
      return Unit;
    };
  }
  function bookContainer$lambda_0($receiver, dispatch, ownProps) {
    $receiver.addFav = bookContainer$lambda$lambda(dispatch);
    $receiver.addReview = bookContainer$lambda$lambda_0(dispatch);
    return Unit;
  }
  var bookContainer;
  function AddBookDispatchProps() {
  }
  AddBookDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AddBookDispatchProps',
    interfaces: []
  };
  function AddBookStateProps() {
  }
  AddBookStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AddBookStateProps',
    interfaces: []
  };
  function AddBookOwnProps() {
  }
  AddBookOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AddBookOwnProps',
    interfaces: []
  };
  function addBookContainer$lambda($receiver, state, ownProps) {
    $receiver.authors = state.authors;
    $receiver.genres = state.genres;
    return Unit;
  }
  function addBookContainer$lambda$lambda(closure$dispatch) {
    return function (it) {
      closure$dispatch(new AddBook(it));
      return Unit;
    };
  }
  function addBookContainer$lambda_0($receiver, dispatch, ownProps) {
    $receiver.addBook = addBookContainer$lambda$lambda(dispatch);
    return Unit;
  }
  var addBookContainer;
  function Author(firstname, surname, photo) {
    this.firstname = firstname;
    this.surname = surname;
    this.photo = photo;
  }
  Author.prototype.toString = function () {
    return this.firstname + ' ' + this.surname;
  };
  Author.prototype.getProperies = function () {
    return [this.firstname + ' ' + this.surname];
  };
  Author.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Author',
    interfaces: []
  };
  Author.prototype.component1 = function () {
    return this.firstname;
  };
  Author.prototype.component2 = function () {
    return this.surname;
  };
  Author.prototype.component3 = function () {
    return this.photo;
  };
  Author.prototype.copy_6hosri$ = function (firstname, surname, photo) {
    return new Author(firstname === void 0 ? this.firstname : firstname, surname === void 0 ? this.surname : surname, photo === void 0 ? this.photo : photo);
  };
  Author.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.firstname) | 0;
    result = result * 31 + Kotlin.hashCode(this.surname) | 0;
    result = result * 31 + Kotlin.hashCode(this.photo) | 0;
    return result;
  };
  Author.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.firstname, other.firstname) && Kotlin.equals(this.surname, other.surname) && Kotlin.equals(this.photo, other.photo)))));
  };
  function authorList() {
    return [new Author('\u0414\u0436\u043E\u0430\u043D', '\u0420\u043E\u0443\u043B\u0438\u043D\u0433', 'https://im0-tub-ru.yandex.net/i?id=61d4bae88bf5660b56d7feff290ca6f3&n=13'), new Author('\u0421\u0442\u0438\u0432\u0435\u043D', '\u041A\u0438\u043D\u0433', 'https://avatars.mds.yandex.net/get-zen_doc/1899873/pub_5cd98e2848289800b218c1c6_5cd98f33d3406000b2de37c6/scale_1200'), new Author('\u041C\u0430\u0440\u0433\u0430\u0440\u0435\u0442', '\u041C\u0438\u0442\u0447\u0435\u043B\u043B', 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Margaret_Mitchell_NYWTS.jpg'), new Author('\u041A\u044D\u0442\u0440\u0438\u043D', '\u0421\u0442\u043E\u043A\u0435\u0442\u0442', 'https://www4.pictures.zimbio.com/gi/Premiere+DreamWorks+Pictures+Help+Arrivals+b_CUVazIWgEx.jpg'), new Author('\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440', '\u0414\u044E\u043C\u0430', 'https://avatars.mds.yandex.net/get-pdb/1769690/07d1ad61-65a8-43e3-b8e3-61a158263d2c/s1200?webp=false')];
  }
  function Book(name, author, created, image, genre) {
    this.name = name;
    this.author = author;
    this.created = created;
    this.image = image;
    this.genre = genre;
  }
  Book.prototype.toString = function () {
    return this.name;
  };
  Book.prototype.getProperies = function () {
    return [this.name, this.author, this.created, this.genre.toString()];
  };
  Book.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Book',
    interfaces: []
  };
  Book.prototype.component1 = function () {
    return this.name;
  };
  Book.prototype.component2 = function () {
    return this.author;
  };
  Book.prototype.component3 = function () {
    return this.created;
  };
  Book.prototype.component4 = function () {
    return this.image;
  };
  Book.prototype.component5 = function () {
    return this.genre;
  };
  Book.prototype.copy_ecuvu$ = function (name, author, created, image, genre) {
    return new Book(name === void 0 ? this.name : name, author === void 0 ? this.author : author, created === void 0 ? this.created : created, image === void 0 ? this.image : image, genre === void 0 ? this.genre : genre);
  };
  Book.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    result = result * 31 + Kotlin.hashCode(this.created) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.genre) | 0;
    return result;
  };
  Book.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.author, other.author) && Kotlin.equals(this.created, other.created) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.genre, other.genre)))));
  };
  function bookList() {
    return [new Book('\u0413\u0430\u0440\u0440\u0438 \u041F\u043E\u0442\u0442\u0435\u0440 \u0438 \u0443\u0437\u043D\u0438\u043A \u0410\u0437\u043A\u0430\u0431\u0430\u043D\u0430', 0, '2017', 'https://s1.livelib.ru/boocover/1002686425/140/daa2/Dzh._K._Rouling__Garri_Potter_i_uznik_Azkabana.jpg', 0), new Book('\u0417\u0435\u043B\u0435\u043D\u0430\u044F \u043C\u0438\u043B\u044F', 1, '2020', 'https://s1.livelib.ru/boocover/1003823201/140/57e3/Stiven_King__Zelenaya_milya.jpg', 1), new Book('\u0423\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0435 \u0432\u0435\u0442\u0440\u043E\u043C', 2, '2020', 'https://s1.livelib.ru/boocover/1003634473/140/3ca5/Margaret_Mitchell__Unesennye_vetrom.jpg', 2), new Book('\u041F\u0440\u0438\u0441\u043B\u0443\u0433\u0430', 3, '2016', 'https://s1.livelib.ru/boocover/1001569364/140/bdff/Ketrin_Stokett__Prisluga.jpg', 3), new Book('\u0413\u0440\u0430\u0444 \u041C\u043E\u043D\u0442\u0435-\u041A\u0440\u0438\u0441\u0442\u043E', 4, '2019', 'https://s1.livelib.ru/boocover/1003012244/140/4d2a/Aleksandr_Dyuma__Graf_MonteKristo.jpg', 4)];
  }
  function Genre(name) {
    this.name = name;
  }
  Genre.prototype.toString = function () {
    return this.name;
  };
  Genre.prototype.getProperies = function () {
    return [this.name];
  };
  Genre.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Genre',
    interfaces: []
  };
  Genre.prototype.component1 = function () {
    return this.name;
  };
  Genre.prototype.copy_61zpoe$ = function (name) {
    return new Genre(name === void 0 ? this.name : name);
  };
  Genre.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Genre.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function genreList() {
    return [new Genre('\u0411\u0438\u0437\u043D\u0435\u0441-\u043A\u043D\u0438\u0433\u0438'), new Genre('\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430'), new Genre('\u0417\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u0430\u044F \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430'), new Genre('\u0420\u0443\u0441\u0441\u043A\u0430\u044F \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430'), new Genre('\u0414\u0435\u0442\u0441\u043A\u0438\u0435 \u043A\u043D\u0438\u0433\u0438'), new Genre('\u0414\u0435\u0442\u0435\u043A\u0442\u0438\u0432\u044B'), new Genre('\u0424\u044D\u043D\u0442\u0435\u0437\u0438'), new Genre('\u0424\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430'), new Genre('\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0437\u0430'), new Genre('\u041F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F'), new Genre('\u0423\u0436\u0430\u0441\u044B, \u043C\u0438\u0441\u0442\u0438\u043A\u0430'), new Genre('\u041F\u0443\u0431\u043B\u0438\u0446\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430')];
  }
  function Review(author, book, review) {
    this.author = author;
    this.book = book;
    this.review = review;
  }
  Review.prototype.toString = function () {
    return this.review;
  };
  Review.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Review',
    interfaces: []
  };
  Review.prototype.component1 = function () {
    return this.author;
  };
  Review.prototype.component2 = function () {
    return this.book;
  };
  Review.prototype.component3 = function () {
    return this.review;
  };
  Review.prototype.copy_h6sd2a$ = function (author, book, review) {
    return new Review(author === void 0 ? this.author : author, book === void 0 ? this.book : book, review === void 0 ? this.review : review);
  };
  Review.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    result = result * 31 + Kotlin.hashCode(this.book) | 0;
    result = result * 31 + Kotlin.hashCode(this.review) | 0;
    return result;
  };
  Review.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.author, other.author) && Kotlin.equals(this.book, other.book) && Kotlin.equals(this.review, other.review)))));
  };
  function reviewList() {
    return [new Review('Tester', 0, '\u0421 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u044F \u0432\u043B\u0435\u0447\u0435\u0442 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u0438 \u043C\u043E\u0434\u0435\u0440\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u043E\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u044F\u0434\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432! \u0421\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438 \u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044E \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u043C\u043E\u0433\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F? \u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430.'), new Review('Root', 1, '\u0420\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0438 \u0431\u043E\u0433\u0430\u0442\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u043C\u043A\u0438 \u0438 \u043C\u0435\u0441\u0442\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0438 \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u0439, \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447.'), new Review('Qwerty', 2, '\u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043D\u0430\u043C\u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u0443\u0442\u044C \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u0438 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439.'), new Review('Heisenberg', 3, '\u0417\u043D\u0430\u0447\u0438\u043C\u043E\u0441\u0442\u044C \u044D\u0442\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u0430, \u0447\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439? \u041D\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442, \u043E\u0434\u043D\u0430\u043A\u043E, \u0437\u0430\u0431\u044B\u0432\u0430\u0442\u044C \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439.'), new Review('Tester', 4, '\u0414\u043E\u0440\u043E\u0433\u0438\u0435 \u0434\u0440\u0443\u0437\u044C\u044F, \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430\u043C\u0435\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u043B\u0430\u043D\u0430 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043E\u0442 \u043D\u0430\u0441 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0444\u043E\u0440\u043C \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F. '), new Review('Genius 11', 0, '\u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0441\u043B\u043E\u0436\u0438\u0432\u0448\u0430\u044F\u0441\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u043E\u0437\u0438\u0446\u0438\u0439, \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447. \u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430\u043C\u0435\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u043B\u0430\u043D\u0430 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u043E\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u044F\u0434\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432.'), new Review('Adil', 0, '\u0414\u043E\u0440\u043E\u0433\u0438\u0435 \u0434\u0440\u0443\u0437\u044C\u044F, \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0441 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0430\u043C\u0438 \u0438\u0437 IT \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043E\u0442 \u043D\u0430\u0441 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0446\u0435\u043B\u0435\u0441\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.')];
  }
  function State(books, authors, genres, reviews, favs) {
    if (favs === void 0)
      favs = [3];
    this.books = books;
    this.authors = authors;
    this.genres = genres;
    this.reviews = reviews;
    this.favs = favs;
  }
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function newId($receiver) {
    var tmp$, tmp$_0;
    var $receiver_0 = $receiver.entries;
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver_0.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }var maxValue = maxElem.key;
      do {
        var e = iterator.next();
        var v = e.key;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }}
       while (iterator.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    return ((tmp$_0 = (tmp$ = maxBy$result) != null ? tmp$.key : null) != null ? tmp$_0 : 0) + 1 | 0;
  }
  function initialState() {
    var $receiver = bookList();
    var destination = ArrayList_init($receiver.length);
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
    }
    var tmp$_1 = toMap(destination);
    var $receiver_0 = authorList();
    var destination_0 = ArrayList_init($receiver_0.length);
    var tmp$_2, tmp$_0_0;
    var index_0 = 0;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
      var item_0 = $receiver_0[tmp$_2];
      destination_0.add_11rb$(to((tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0), item_0));
    }
    var tmp$_3 = toMap(destination_0);
    var $receiver_1 = genreList();
    var destination_1 = ArrayList_init($receiver_1.length);
    var tmp$_4, tmp$_0_1;
    var index_1 = 0;
    for (tmp$_4 = 0; tmp$_4 !== $receiver_1.length; ++tmp$_4) {
      var item_1 = $receiver_1[tmp$_4];
      destination_1.add_11rb$(to((tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1), item_1));
    }
    var tmp$_5 = toMap(destination_1);
    var $receiver_2 = reviewList();
    var destination_2 = ArrayList_init($receiver_2.length);
    var tmp$_6, tmp$_0_2;
    var index_2 = 0;
    for (tmp$_6 = 0; tmp$_6 !== $receiver_2.length; ++tmp$_6) {
      var item_2 = $receiver_2[tmp$_6];
      destination_2.add_11rb$(to((tmp$_0_2 = index_2, index_2 = tmp$_0_2 + 1 | 0, tmp$_0_2), item_2));
    }
    return new State(tmp$_1, tmp$_3, tmp$_5, toMap(destination_2));
  }
  function withDisplayName(name, kClass) {
    get_rClass(kClass).displayName = name;
    return kClass;
  }
  function withDisplayName_0(name, fComp) {
    var obj = {};
    obj.displayName = name;
    return Object.assign(fComp, obj);
  }
  var store;
  function main$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.invoke_eb8iu4$(appContainer, main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    hashRouter($receiver, main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda($receiver) {
    provider($receiver, store, main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function AddAuthor(author) {
    this.author = author;
  }
  AddAuthor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddAuthor',
    interfaces: [RAction]
  };
  function ChangeAuthor(id, newAuthor) {
    this.id = id;
    this.newAuthor = newAuthor;
  }
  ChangeAuthor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeAuthor',
    interfaces: [RAction]
  };
  function RemoveAuthor(id) {
    this.id = id;
  }
  RemoveAuthor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveAuthor',
    interfaces: [RAction]
  };
  function AddBook(book) {
    this.book = book;
  }
  AddBook.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddBook',
    interfaces: [RAction]
  };
  function ChangeBook(id, newBook) {
    this.id = id;
    this.newBook = newBook;
  }
  ChangeBook.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeBook',
    interfaces: [RAction]
  };
  function RemoveBook(id) {
    this.id = id;
  }
  RemoveBook.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveBook',
    interfaces: [RAction]
  };
  function ChangeFav(id) {
    this.id = id;
  }
  ChangeFav.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeFav',
    interfaces: [RAction]
  };
  function AddReview(review) {
    this.review = review;
  }
  AddReview.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddReview',
    interfaces: [RAction]
  };
  function RemoveReview(id) {
    this.id = id;
  }
  RemoveReview.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveReview',
    interfaces: [RAction]
  };
  function booksReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, AddBook))
      return plus(state, to(newId, action.book));
    else if (Kotlin.isType(action, RemoveBook))
      return minus(state, action.id);
    else if (Kotlin.isType(action, ChangeBook)) {
      var $receiver = toMutableMap(state);
      var key = action.id;
      var value = action.newBook;
      $receiver.put_xwzc9p$(key, value);
      return $receiver;
    } else
      return state;
  }
  function authorsReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, AddAuthor))
      return plus(state, to(newId, action.author));
    else if (Kotlin.isType(action, RemoveAuthor))
      return minus(state, action.id);
    else if (Kotlin.isType(action, ChangeAuthor)) {
      var $receiver = toMutableMap(state);
      var key = action.id;
      var value = action.newAuthor;
      $receiver.put_xwzc9p$(key, value);
      return $receiver;
    } else
      return state;
  }
  function genresReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    return state;
  }
  function favsReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, ChangeFav)) {
      var $receiver = toMutableList(state);
      if ($receiver.contains_11rb$(action.id))
        $receiver.remove_11rb$(action.id);
      else
        $receiver.add_11rb$(action.id);
      return copyToArray($receiver);
    } else
      return state;
  }
  function reviewsReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, AddReview))
      return plus(state, to(newId, action.review));
    else if (Kotlin.isType(action, RemoveReview))
      return minus(state, action.id);
    else
      return state;
  }
  function rootReducer(state, action) {
    if (Kotlin.isType(action, AddBook)) {
      var id = newId(state.books);
      return new State(booksReducer(state.books, action, id), authorsReducer(state.authors, action), genresReducer(state.genres, action), reviewsReducer(state.reviews, action), favsReducer(state.favs, action));
    } else if (Kotlin.isType(action, AddAuthor)) {
      var id_0 = newId(state.authors);
      return new State(booksReducer(state.books, action), authorsReducer(state.authors, action, id_0), genresReducer(state.genres, action), reviewsReducer(state.reviews, action), favsReducer(state.favs, action));
    } else if (Kotlin.isType(action, ChangeFav))
      return new State(booksReducer(state.books, action), authorsReducer(state.authors, action), genresReducer(state.genres, action), reviewsReducer(state.reviews, action), favsReducer(state.favs, action));
    else if (Kotlin.isType(action, AddReview)) {
      var id_1 = newId(state.reviews);
      return new State(booksReducer(state.books, action), authorsReducer(state.authors, action), genresReducer(state.genres, action), reviewsReducer(state.reviews, action, id_1), favsReducer(state.favs, action, id_1));
    } else
      return new State(booksReducer(state.books, action), authorsReducer(state.authors, action), genresReducer(state.genres, action), reviewsReducer(state.reviews, action), favsReducer(state.favs, action));
  }
  var package$components = _.components || (_.components = {});
  package$components.AnyTableProps = AnyTableProps;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  package$components.fAnyTable_aujjo5$ = fAnyTable;
  package$components.AppProps = AppProps;
  package$components.RouteNumberResult = RouteNumberResult;
  package$components.fApp = fApp;
  package$components.renderObject_q6otrr$ = renderObject;
  package$components.AuthorTableItemProps = AuthorTableItemProps;
  package$components.fAuthorTableItem = fAuthorTableItem;
  package$components.authorTableItem_h964e1$ = authorTableItem;
  package$components.AuthorProps = AuthorProps;
  Object.defineProperty(package$components, 'fAuthor', {
    get: function () {
      return fAuthor;
    }
  });
  package$components.author_qutb0l$ = author;
  package$components.BookTableItemProps = BookTableItemProps;
  package$components.fBookTableItem = fBookTableItem;
  package$components.bookTableItem_ptrlxj$ = bookTableItem;
  package$components.BookProps = BookProps;
  Object.defineProperty(package$components, 'fBook', {
    get: function () {
      return fBook;
    }
  });
  package$components.book_s23s2l$ = book;
  package$components.AddBookProps = AddBookProps;
  Object.defineProperty(package$components, 'fAddBook', {
    get: function () {
      return fAddBook;
    }
  });
  package$components.addBook_2kqnlh$ = addBook;
  var package$component = _.component || (_.component = {});
  package$component.favsProps = favsProps;
  Object.defineProperty(package$component, 'fFavs', {
    get: function () {
      return fFavs;
    }
  });
  package$component.favs_ptrlxj$ = favs;
  package$components.GenreTableItemProps = GenreTableItemProps;
  package$components.fGenreTableItem = fGenreTableItem;
  package$components.genreTableItem_bzl8lt$ = genreTableItem;
  package$components.GenreProps = GenreProps;
  Object.defineProperty(package$components, 'fGenre', {
    get: function () {
      return fGenre;
    }
  });
  package$components.genre_q93tle$ = genre;
  package$components.ReviewProps = ReviewProps;
  Object.defineProperty(package$components, 'fReview', {
    get: function () {
      return fReview;
    }
  });
  package$components.review_a8vg0r$ = review;
  var package$containers = _.containers || (_.containers = {});
  package$containers.AnyTableDispatchProps = AnyTableDispatchProps;
  package$containers.AnyTableStateProps = AnyTableStateProps;
  Object.defineProperty(package$containers, 'authorsTableHOC', {
    get: function () {
      return authorsTableHOC;
    }
  });
  Object.defineProperty(package$containers, 'authorTableRClass', {
    get: function () {
      return authorTableRClass;
    }
  });
  Object.defineProperty(package$containers, 'authorsTableContainer', {
    get: function () {
      return authorsTableContainer;
    }
  });
  Object.defineProperty(package$containers, 'booksTableContainer', {
    get: function () {
      return booksTableContainer;
    }
  });
  Object.defineProperty(package$containers, 'favsTableContainer', {
    get: function () {
      return favsTableContainer;
    }
  });
  Object.defineProperty(package$containers, 'appContainer', {
    get: function () {
      return appContainer;
    }
  });
  package$containers.AuthorDispatchProps = AuthorDispatchProps;
  package$containers.AuthorStateProps = AuthorStateProps;
  package$containers.AuthorOwnProps = AuthorOwnProps;
  Object.defineProperty(package$containers, 'authorContainer', {
    get: function () {
      return authorContainer;
    }
  });
  package$containers.BookDispatchProps = BookDispatchProps;
  package$containers.BookStateProps = BookStateProps;
  package$containers.BookOwnProps = BookOwnProps;
  Object.defineProperty(package$containers, 'bookContainer', {
    get: function () {
      return bookContainer;
    }
  });
  package$containers.AddBookDispatchProps = AddBookDispatchProps;
  package$containers.AddBookStateProps = AddBookStateProps;
  package$containers.AddBookOwnProps = AddBookOwnProps;
  Object.defineProperty(package$containers, 'addBookContainer', {
    get: function () {
      return addBookContainer;
    }
  });
  var package$data = _.data || (_.data = {});
  package$data.Author = Author;
  package$data.authorList = authorList;
  package$data.Book = Book;
  package$data.bookList = bookList;
  package$data.Genre = Genre;
  package$data.genreList = genreList;
  package$data.Review = Review;
  package$data.reviewList = reviewList;
  package$data.State = State;
  package$data.newId_hx7udi$ = newId;
  package$data.initialState = initialState;
  var package$hoc = _.hoc || (_.hoc = {});
  package$hoc.withDisplayName_7s1bg$ = withDisplayName;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$hoc.withDisplayName_yqt66y$ = withDisplayName_0;
  Object.defineProperty(_, 'store', {
    get: function () {
      return store;
    }
  });
  _.main = main;
  var package$redux = _.redux || (_.redux = {});
  package$redux.AddAuthor = AddAuthor;
  package$redux.ChangeAuthor = ChangeAuthor;
  package$redux.RemoveAuthor = RemoveAuthor;
  package$redux.AddBook = AddBook;
  package$redux.ChangeBook = ChangeBook;
  package$redux.RemoveBook = RemoveBook;
  package$redux.ChangeFav = ChangeFav;
  package$redux.AddReview = AddReview;
  package$redux.RemoveReview = RemoveReview;
  _.booksReducer_2b06ms$ = booksReducer;
  _.authorsReducer_2eib2i$ = authorsReducer;
  _.genresReducer_6s8wz0$ = genresReducer;
  _.favsReducer_kc55uo$ = favsReducer;
  _.reviewsReducer_to21a5$ = reviewsReducer;
  _.rootReducer_mybawf$ = rootReducer;
  fAuthor = functionalComponent(fAuthor$lambda);
  fBook = functionalComponent(fBook$lambda);
  fAddBook = functionalComponent(fAddBook$lambda);
  fFavs = functionalComponent(fFavs$lambda);
  fGenre = functionalComponent(fGenre$lambda);
  fReview = functionalComponent(fReview$lambda);
  authorsTableHOC = rConnect(authorsTableHOC$lambda, authorsTableHOC$lambda_0);
  authorTableRClass = withDisplayName_0('AuthorList', fAnyTable('\u0410\u0432\u0442\u043E\u0440\u044B', '/authors', getCallableRef('authorTableItem', function ($receiver, authors, books, genres) {
    return authorTableItem($receiver, authors, books, genres);
  })));
  authorsTableContainer = invoke(authorsTableHOC, authorTableRClass);
  booksTableContainer = invoke(rConnect(booksTableContainer$lambda, booksTableContainer$lambda_0), withDisplayName_0('BookList', fAnyTable('\u041A\u043D\u0438\u0433\u0438', '/books', getCallableRef('bookTableItem', function ($receiver, books, authors, genres) {
    return bookTableItem($receiver, books, authors, genres);
  }))));
  favsTableContainer = invoke(rConnect(favsTableContainer$lambda, favsTableContainer$lambda_0), withDisplayName_0('FavsTableItem', fAnyTable('\u041F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0435\u0441\u044F \u043A\u043D\u0438\u0433\u0438', '/favs', getCallableRef('favs', function ($receiver, books, authors, genres) {
    return favs($receiver, books, authors, genres);
  }))));
  appContainer = invoke(rConnect_0(appContainer$lambda, appContainer$lambda_0), withDisplayName_0('MyApp', fApp()));
  authorContainer = invoke(rConnect(authorContainer$lambda, authorContainer$lambda_0), withDisplayName_0('Author', fAuthor));
  bookContainer = invoke(rConnect(bookContainer$lambda, bookContainer$lambda_0), withDisplayName_0('Book', fBook));
  addBookContainer = invoke(rConnect(addBookContainer$lambda, addBookContainer$lambda_0), withDisplayName_0('AddBook', fAddBook));
  var tmp$, tmp$_0, tmp$_1, tmp$_2;
  tmp$ = getCallableRef('rootReducer', function (state, action) {
    return rootReducer(state, action);
  });
  tmp$_0 = initialState();
  tmp$_1 = rEnhancer();
  if (window.__REDUX_DEVTOOLS_EXTENSION__)
    tmp$_2 = window.__REDUX_DEVTOOLS_EXTENSION__();
  else
    tmp$_2 = function (f) {
      return f;
    };
  store = createStore(tmp$, tmp$_0, compose(tmp$_1, tmp$_2));
  main();
  Kotlin.defineModule('book-search', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-react-dom'), require('kotlin-react'), require('kotlin-react-router-dom'), require('kotlinx-html-js'), require('kotlin-react-redux'), require('kotlin-extensions'), require('kotlin-redux'), require('redux')));

//# sourceMappingURL=book-search.js.map
