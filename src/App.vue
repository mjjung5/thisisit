<template>
  <div id="app">
<head>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/layout.css">
  <link rel="stylesheet" href="./css/main.css">
  <title>롯데면세점</title>
</head>
  <div class="lotte_dfs_container">
    <header class="lotte_dfs_header_wrap">
      <div class="header_wrap">
        <button type="button" class="btn_category"></button>
        <h1 class="logo">
          <a href="#none"><span class="hidden_txt">로고</span></a>
        </h1>
        <div class="header_right">
          <button type="button" class="btn_search">
            검색
          </button>
          <button type="button" class="icon_cart">
            장바구니
          </button>
          <button type="button" class="icon_lang">
            언어변경
         </button>
        </div>
      </div>
    </header>

    <main class="contents_area">
      <div class="main_visual_area">
        <div class="main_inner_wrap">
          <ul>
            <li>
              <a href="#none">
                <img src="./assets/img/mainvisual.jpg" alt="크리니크 치크팝 어마어마 특가전 세트 구매시 다낭 항공권 증정">
                <div class="txt_box">
                  <div class="flag_set">
                    <span class="reward">구매사은</span>
                  </div>
                  <div class="inner_title">
                    <span class="main_txt">크리니크 치크팝</span>
                    <span class="main_txt">어마어마 특가전</span>
                    <span class="sub_txt">세트구매시 다낭 항공권 증정</span>
                    <span class="sub_txt">항공권 증정!</span>
                    <span class="txt_num">2018.06.23 ~ 27</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="page_counter">
            <span>20</span>
            <span>/</span>
            <span class="total_num">20</span>
            <button class="btn_overview">
              <span class="hidden_txt">펼쳐보기</span>
            </button>
          </div>
        </div>

        <div class="tabs_wrap">
          <div class="tab_menu_area">
            <div class="tabs">
              <ul>
                <li>
                  <a href="#none">
                    베스트
                  </a>
                </li>
                <li>
                  <a href="#none">
                    핫세일
                  </a>
                </li>
                <li>
                  <a href="#none">
                    브랜드행사
                  </a>
                </li>
                <li>
                  <a href="#none">
                    신상품
                  </a>
                </li>
                <li>
                  <a href="#none">
                    #포포포
                  </a>
                </li>
              </ul>
            </div>
            <button class="btn_more">
              <span class="hidden_txt">더보기</span>
            </button>
          </div>

        </div>
      </div>

      <div class="main_content_area">
        <div class="main_module_wrap no_bottom">
          <div class="main_contents">
            <div class="banner_area">
              <div class="banner_wrap">
                <ul>
                  <li>
                    <a href="#none">
                      <img src="./assets/img/img_ban01.jpg" alt="로그인하면 자동 $3000+a 드림">
                    </a>
                  </li>
                </ul>
                <div class="pagenation">
                  <span class="on">1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div class="banner_wrap right">
                <ul>
                  <li>
                    <a href="#none">
                      <img src="./assets/img/img_ban02.jpg" alt="매주 금요일은 통신사 3사 DAY!">
                    </a>
                  </li>
                </ul>
                <div class="pagenation">
                  <span class="on">1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="benefit_area">
              <ul>
                <li>
                  <a href="#none">
                    <img src="./assets/img/icon_benefit_card.png" alt="결제혜택">
                    <span>결제혜택</span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <img src="./assets/img/icon_benefit_alliance.png" alt="제휴혜택">
                    <span>제휴혜택</span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <img src="./assets/img/icon_benefit_gift.png" alt="이벤트/선물">
                    <span>이벤트/선물</span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <img src="./assets/img/icon_benefit_new.png" alt="신규혜택">
                    <span>신규혜택</span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <img src="./assets/img/icon_benefit_weding.png" alt="웨딩고객">
                    <span>웨딩고객</span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <img src="./assets/img/icon_benefit_member.png" alt="회원혜택">
                    <span>회원혜택</span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <img src="./assets/img/icon_benefit_store.png" alt="매장혜택">
                    <span>매장혜택</span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <img src="./assets/img/icon_benefit_customer.png" alt="고객안내">
                    <span>고객안내</span>
                  </a>
                </li>
              </ul>
              <button class="btn_toggle" type="button">
                <span class="hidden_txt">펼쳐보기</span>
              </button>
            </div>

            <div class="brand_banner_area">
              <div class="brand_logo_wrap">
                <ul>
                  <li>
                    <a href="#none">
                      <img src="./assets/img/logo_chanel.png" alt="샤넬">
                    </a> 
                  </li>
                  <li>
                    <a href="#none">
                      <img src="./assets/img/logo_mac.png" alt="맥">
                    </a> 
                  </li>
                  <li>
                    <a href="#none">
                      <img src="./assets/img/logo_imvely.png" alt="임블리">
                    </a> 
                  </li>
                </ul>
              </div>
              <div class="pagenation">
                <span class="on">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>

        <div class="main_module_wrap no_bottom">
          <div class="trip_talk">
            <a href="#none">
              <img src="./assets/img/img_tripTaik.gif" alt="TripTalk 설렘 공유하고 캔디 냠!">
            </a>
          </div>
        </div>
        
        <div class="main_module_wrap round_type">
          <div class="title_area">
            <h2>타임세일</h2>
            <div class="time">
              <span>20</span>
              <span>34</span>
              <span>56</span>
            </div>
          </div>
          <div class="list_contents">
            <ul>
              <li>
                <a href="#none">
                  <figure>
                    <img src="./assets/img/prod_01.jpg" alt="상품 썸네일">
                  </figure>
                  <span class="prod_name">아이더블유씨하프펜아이더블유씨하프펜아이더블유씨하프펜</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <figure>
                    <img src="./assets/img/prod_02.jpg" alt="상품 썸네일">
                  </figure>
                  <span class="prod_name">숨</span>
                </a>
              </li>
            </ul>
            <div class="pagenation">
              <span class="on">1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>
        </div>

        <div class="main_module_wrap no_bottom">
          <div class="image_banner">
            <a href="#none">
              <figure>
                <img src="./assets/img/planshop01.jpg" alt="ONLINE BEST RESORT ACC COLLECTION 로맨틱한 봄과 쿨한 여름을 위한 단독 컬렉션">
              </figure>
              <div class="txt_box">
                <span class="title">ONLINE BEST</span>
                <span class="big_txt">RESORT ACC <br> COLLECTION</span>
                <span class="sub_txt">로맨틱한 봄과 쿨한 여름을 위한<br> 단독 컬렉션</span>
              </div>
            </a>
          </div>
        </div>

        <div class="main_module_wrap round_type">
          <div class="title_area">
            <a href="#none">
              <h2>김롯데님을 위한 맞춤상품</h2>
              <span class="btn_more">더보기</span>
            </a>
          </div>
          
          <div class="list_contents">
            <ul>
              <li>
                <a href="#none">
                  <figure>
                    <img src="./assets/img/prod_01.jpg" alt="상품 썸네일">
                  </figure>
                  <div class="price_area">
                    <span class="brand">아이더블유씨하프펜아이더블유씨하프펜아이더블유씨하프펜</span>
                    <span class="prod">프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬</span>
                    <span class="price red">
                      $45
                      <em>35,972원</em>
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#none">
                  <figure>
                    <img src="./assets/img/prod_02.jpg" alt="상품 썸네일">
                  </figure>
                  <div class="price_area">
                    <span class="brand">페라가모</span>
                    <span class="prod">프레시안 빅마스카라컬...</span>
                    <span class="price red">
                      $81,910
                      <em>92,393,399원</em>
                    </span>
                  </div>                
                </a>
              </li>
            </ul>
            <div class="pagenation">
              <span class="on">1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>
        </div>

        <div class="main_module_wrap round_type">
          <div class="title_area">
            <a href="#none">
              <h2>오늘의 특가</h2>
              <span class="btn_more">더보기</span>
            </a>
          </div>
          <div class="promotion_list_wrap">
            <ul>
              <li>
                <a href="#none">
                  <div class="thumb">
                    <img src="./assets/img/prod_01.jpg" alt="">
                    <div class="discount_flag">
                      <span><strong>30</strong>%</span>
                    </div>
                  </div>
                  <div class="price_area">
                    <div class="flag">
                      <span class="gift">사은품</span>
                    </div>
                    <span class="brand">페라가모</span>
                    <span class="prod">프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬</span>
                    <div class="price red17">
                      <span class="before_price">$17</span>
                      <strong>$</strong>8.7
                      <em>92,393,399원</em>
                    </div>
                  </div>                
                </a>
              </li>
              <li>
                <a href="#none">
                  <div class="thumb">
                    <img src="./assets/img/prod_02.jpg" alt="">
                    <div class="discount_flag">
                      <span><strong>30</strong>%</span>
                    </div>
                  </div>
                  <div class="price_area">
                    <div class="flag">
                      <span class="gift">사은품</span>
                    </div>
                    <span class="brand">페라가모</span>
                    <span class="prod">프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬</span>
                    <div class="price red17">
                      <span class="before_price">$17</span>
                      <strong>$</strong>8.7
                      <em>92,393,399원</em>
                    </div>
                  </div>                
                </a>
              </li>
              <li>
                <a href="#none">
                  <div class="thumb">
                    <img src="./assets/img/prod_01.jpg" alt="">
                    <div class="discount_flag">
                      <span><strong>30</strong>%</span>
                    </div>
                  </div>
                  <div class="price_area">
                    <div class="flag">
                      <span class="gift">사은품</span>
                    </div>
                    <span class="brand">페라가모</span>
                    <span class="prod">프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬</span>
                    <div class="price red17">
                      <span class="before_price">$17</span>
                      <strong>$</strong>8.7
                      <em>92,393,399원</em>
                    </div>
                  </div>                
                </a>
              </li>
              <li>
                <a href="#none">
                  <div class="thumb">
                    <img src="./assets/img/prod_02.jpg" alt="">
                    <div class="discount_flag">
                      <span><strong>30</strong>%</span>
                    </div>
                  </div>
                  <div class="price_area">
                    <div class="flag">
                      <span class="gift">사은품</span>
                    </div>
                    <span class="brand">페라가모</span>
                    <span class="prod">프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬프레시안 빅마스카라컬</span>
                    <div class="price red17">
                      <span class="before_price">$17</span>
                      <strong>$</strong>8.7
                      <em>92,393,399원</em>
                    </div>
                  </div>                
                </a>
              </li>
            </ul>
            <div class="pagenation">
              <span class="on">1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>
        </div>

        <div class="main_module_wrap round_type">
          <div class="title_area">
            <a href="#none">
              <h2>롯데단독 프로모션</h2>
              <span class="btn_more">더보기</span>
            </a>
          </div>
          <div class="best_product_wrap">
            <div class="inner">
              <ul>
                <li>
                  <a href="#none">
                    <figure>
                      <img src="./assets/img/big_imgbanner01.jpg" alt="기획전 배너">
                      <div class="paging">
                        <span>
                          1 /
                          <em> 10 </em>
                        </span>
                      </div>
                    </figure>
                    <div class="txt_set">
                      <span class="brd_name">입사</span>
                      <span class="sub_txt">THE TIME RESET AQUA DUO</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <figure>
                      <img src="./assets/img/big_imgbanner01.jpg" alt="기획전 배너">
                      <div class="paging">
                        <span>
                          1 /
                          <em> 10 </em>
                        </span>
                      </div>
                    </figure>
                    <div class="txt_set">
                      <span class="brd_name">입사</span>
                      <span class="sub_txt">THE TIME RESET AQUA DUO</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <figure>
                      <img src="./assets/img/big_imgbanner01.jpg" alt="기획전 배너">
                      <div class="paging">
                        <span>
                          1 /
                          <em> 10 </em>
                        </span>
                      </div>
                    </figure>
                    <div class="txt_set">
                      <span class="brd_name">입사</span>
                      <span class="sub_txt">THE TIME RESET AQUA DUO</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <figure>
                      <img src="./assets/img/big_imgbanner01.jpg" alt="기획전 배너">
                      <div class="paging">
                        <span>
                          1 /
                          <em> 10 </em>
                        </span>
                      </div>
                    </figure>
                    <div class="txt_set">
                      <span class="brd_name">입사</span>
                      <span class="sub_txt">THE TIME RESET AQUA DUO</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <figure>
                      <img src="./assets/img/big_imgbanner01.jpg" alt="기획전 배너">
                      <div class="paging">
                        <span>
                          1 /
                          <em> 10 </em>
                        </span>
                      </div>
                    </figure>
                    <div class="txt_set">
                      <span class="brd_name">입사</span>
                      <span class="sub_txt">THE TIME RESET AQUA DUO</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="main_module_wrap round_type">
          <div class="title_area">
            <a href="#none">
              <h2>브랜드 프로모션</h2>
              <span class="btn_more">더보기</span>
            </a>
          </div>

          <div class="big_banner_wrap">
            <figure>
              <img src="./assets/img/bg_brand.jpg" alt="바이레도 기획전 배경">
            </figure>
            <div class="txt_box">
              <figure class="brd_logo">
                <img src="./assets/img/main_brd_logo.png" alt="바이레도 로고">
              </figure>
              <span class="big_txt">Byredo<br>SWEET VELVET</span>
              <span class="sub_txt">트레블 키트 사은품 증정</span>
            </div>
          </div>

          <div class="brand_prod_list">
            <ul>
              <li>
                <a href="#none">
                  <div class="thumb">
                    <img src="./assets/img/prod_03.jpg" alt="입사 $120 이상 구매 시 마스크팩1pcs증정">
                    <div class="paging">
                      <span>
                        1 /
                        <em> 10 </em>
                      </span>
                    </div>
                  </div>
                  <div class="txt_set">
                    <span class="brd_name">입사</span>
                    <span class="sub_txt">$120 이상 구매 시 <br>마스크팩1pcs증정</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#none">
                  <div class="thumb">
                    <img src="./assets/img/prod_04.jpg" alt="입사 $120 이상 구매 시 마스크팩1pcs증정">
                    <div class="paging">
                      <span>
                        1 /
                        <em> 10 </em>
                      </span>
                    </div>
                  </div>
                  <div class="txt_set">
                    <span class="brd_name">입사</span>
                    <span class="sub_txt">$120 이상 구매 시 <br>마스크팩1pcs증정</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#none">
                  <div class="thumb">
                    <img src="./assets/img/prod_03.jpg" alt="입사 $120 이상 구매 시 마스크팩1pcs증정">
                    <div class="paging">
                      <span>
                        1 /
                        <em> 10 </em>
                      </span>
                    </div>
                  </div>
                  <div class="txt_set">
                    <span class="brd_name">입사</span>
                    <span class="sub_txt">$120 이상 구매 시 <br>마스크팩1pcs증정</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="main_module_wrap no_bottom">
          <div class="image_banner">
            <a href="#none">
              <figure>
                <img src="./assets/img/planshop01.jpg" alt="ONLINE BEST RESORT ACC COLLECTION 로맨틱한 봄과 쿨한 여름을 위한 단독 컬렉션">
              </figure>
              <div class="txt_box">
                <span class="title">ONLINE BEST</span>
                <span class="big_txt">RESORT ACC <br> COLLECTION</span>
                <span class="sub_txt">로맨틱한 봄과 쿨한 여름을 위한<br> 단독 컬렉션</span>
              </div>
            </a>
          </div>
        </div>


        <div class="main_module_wrap round_type">
          <div class="title_area">
            <h2>베스트</h2>
          </div>
          <div class="best_prod_wrap">
            <div class="cate_list">
              <ul>
                <li>
                  <button class="best_tab">월간100</button>
                </li>
                <li class="on">
                  <button class="wekely_tab">주간100</button>
                </li>
                <li>
                  <button>메이크업</button>
                </li>
                <li>
                  <button>향수/바디/헤어</button>
                </li>
                <li>
                  <button>향수/바디/헤어</button>
                </li>
                <li>
                  <button>향수/바디/헤어</button>
                </li>
              </ul>
            </div>
            
            <div class="prod_item">
              <ul>
                <li>
                  <a href="#none">
                    <span class="rank on">1</span>
                    <div class="thumb">
                      <img src="./assets/img/prod_05.jpg" alt="">
                    </div>
                    <div class="price_area">
                      <span class="brand">바비브라운</span>
                      <span class="prod">잉글리시 페어 앤 프리지아 코롱잉글리시 페어 앤 프리지아 코롱잉글리시 페어 앤 프리지아 코롱</span>
                      <div class="price red17">
                        <strong>$</strong>
                        45
                        <em>92,393,399원</em>
                      </div>
                    </div> 
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <span class="rank">2</span>
                    <div class="thumb">
                      <img src="./assets/img/prod_05.jpg" alt="">
                    </div>
                    <div class="price_area">
                      <span class="brand">바비브라운</span>
                      <span class="prod">잉글리시 페어 앤 프리지아 코롱잉글리시 페어 앤 프리지아 코롱잉글리시 페어 앤 프리지아 코롱</span>
                      <div class="price red17">
                        <strong>$</strong>
                        45
                        <em>92,393,399원</em>
                      </div>
                    </div> 
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <span class="rank">3</span>
                    <div class="thumb">
                      <img src="./assets/img/prod_05.jpg" alt="">
                    </div>
                    <div class="price_area">
                      <span class="brand">바비브라운</span>
                      <span class="prod">잉글리시 페어 앤 프리지아 코롱</span>
                      <div class="price red17">
                        <strong>$</strong>
                        45
                        <em>92,393,399원</em>
                      </div>
                    </div> 
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <span class="rank">4</span>
                    <div class="thumb">
                      <img src="./assets/img/prod_05.jpg" alt="">
                    </div>
                    <div class="price_area">
                      <span class="brand">바비브라운</span>
                      <span class="prod">잉글리시 페어 앤 프리지아 코롱</span>
                      <div class="price red17">
                        <strong>$</strong>
                        45
                        <em>92,393,399원</em>
                      </div>
                    </div> 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="main_module_wrap round_type">
            <div class="title_area">
              <a href="#none">
                <h2>신규 브랜드</h2>
                <span class="btn_more">더보기</span>
              </a>
            </div>

            <div class="new_brand_prod_list">
              <ul>
                <li>
                  <a href="#none">
                    <div class="thumb">
                      <img src="./assets/img/prod_03.jpg" alt="기획전 이미지">
                    </div>
                    <div class="txt_set">
                      <img src="./assets/img/logo_newBrd.png" alt="신규 브랜드 로고">
                      <span class="brd_name">뷰티블랜드</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <div class="thumb">
                      <img src="./assets/img/prod_04.jpg" alt="기획전 이미지">
                    </div>
                    <div class="txt_set">
                      <img src="./assets/img/logo_newBrd.png" alt="신규 브랜드 로고">
                      <span class="brd_name">뷰티블랜드</span>  
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <div class="thumb">
                      <img src="./assets/img/prod_03.jpg" alt="기획전 이미지">
                    </div>
                    <div class="txt_set">
                      <img src="./assets/img/logo_newBrd.png" alt="신규 브랜드 로고">
                      <span class="brd_name">뷰티블랜드</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        <div class="main_module_wrap round_type">
          <div class="title_area">
            <h2>제휴 이벤트</h2>
          </div>
          <div class="event_wrap">
            <a class="img_wrap" href="#none">
              <img src="./assets/img/img_ban03.jpg" alt="최대 30% 할인 혜택">
            </a>
            <div class="items">
              <ul>
                <li>
                  <a href="#none">
                    <figure>
                      <img src="./assets/img/evtBanner.jpg" alt="3박 숙박하면 1박이 무료">
                      <div class="pagenation">
                        <span>1/8</span>
                      </div>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <figure>
                      <img src="./assets/img/evtBanner.jpg" alt="3박 숙박하면 1박이 무료">
                      <div class="pagenation">
                        <span>1/8</span>
                      </div>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <figure>
                      <img src="./assets/img/evtBanner.jpg" alt="3박 숙박하면 1박이 무료">
                      <div class="pagenation">
                        <span>1/8</span>
                      </div>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <figure>
                      <img src="./assets/img/evtBanner.jpg" alt="3박 숙박하면 1박이 무료">
                      <div class="pagenation">
                        <span>1/8</span>
                      </div>
                    </figure>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div class="actionBar">
      <div class="actionBtn">
        <ul>
          <li>
            <a href="#none">
              <div class="btnImg">
                <img src="" alt="">
              </div>
              <span>카테고리</span>
            </a>
          </li>
          <li>
            <a href="#none">
              <div>
                <img src="" alt="">
              </div>
              <span>마이롯데</span>
            </a>
          </li>
          <li>
            <a href="#none">
              <div>
                <img src="" alt="">
              </div>
              <span>HOME</span>
            </a>
          </li>
          <li>
            <a href="#none">
              <div>
                <img src="" alt="">
              </div>
              <span>주문배송</span>
            </a>
          </li>
          <li>
            <a href="#none">
              <div>
                <img src="" alt="">
              </div>
              <span>최근본쇼핑</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <footer class="lotte_footer">
      <div class="currency">
        <span class="today">오늘의 환율</span>
        <span class="price">$1 = 1,187.5원</span>
      </div>
      <div class="footer_menu">
        <ul>
          <li>
            <a href="#none">주문가능시간</a>
          </li>
          <li>
            <a href="#none">인도장안내</a>
          </li>
          <li>
            <a href="#none">고객센터</a>
          </li>
          <li>
            <a href="#none">임직원등록</a>
          </li>
        </ul>
      </div>
      <div class="business_info">
        <button class="btn_more">
          (주)호텔롯데 롯데면세점 사업자정보 및 법적고지
        </button>
        <div class="ceo_info">
          <div class="info">
            <span>주) 호텔롯데 롯데면세점 대표이사 : 이갑</span>
          </div>
        </div>
      </div>
      <div class="footer_bottom_menu">
        <ul>
          <li>
            <a href="#none">회사소개</a>
          </li>
          <li>
            <a href="#none">이용약관</a>
          </li>
          <li class="bold">
            <a href="#none">개인정보처리방침</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#none">영상정보처리관리방침</a>
          </li>
          <li>
            <a href="#none">PC버전</a>
          </li>
          <li>
            <a href="#none">지점안내</a>
          </li>
          <li>
            <button class="btn_change_lang">
              <span>언어변경</span>
            </button>
          </li>
        </ul>
      </div>
      <div class="sns_icon_set">
        <ul>
          <li class="youtube">
            <a href="#none">
              <span class="hidden_txt">youtube</span>
            </a>
          </li>
          <li class="instagram">
            <a href="#none">
              <span class="hidden_txt">instagram</span>
            </a>
          </li>
          <li class="facebook">
            <a href="#none">
              <span class="hidden_txt">facebook</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="copy_right">Copyright ⓒ Lottehotel. All rights Reserved.</div>
    </footer>
  </div>
</div>
</template>

<script>

export default {
  name: "App",
  components: {
  },


  data(){
    
  },

};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
