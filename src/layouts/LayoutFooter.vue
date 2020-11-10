<template>
  <footer class="lotteNewFooter">
    <div class="footerTopWrap">
      <div class="footerCurrency">
        <dl>
          <dt>오늘의 환율</dt>
          <dd>$1=1,182원</dd>
        </dl>
        <!-- <span class="today">오늘의 환율</span> -->
        <!-- <span class="price">$1 = 1,187.5원</span> -->
      </div>
      <div class="footerCustomer">
        <dl>
          <dt>고객센터</dt>
          <dd>1688-3000</dd>
        </dl>
      </div>
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
</template>

<script>
export default {
  data() {}
}
</script>

<style lang="scss" scoped>
.lotteNewFooter{
  .footerTopWrap{
    display: flex;

    > div {
      display: inline-flex; 
      dl {
        dt{
          font-size:14px;
          color: #999;
          padding-bottom: 5px;
        }

        dd{
          font-size:13px;
          color: #000;

        }
      }
    }

    .footerCurrency{
      flex:1;
      justify-content: flex-start;

    }

    .footerCustomer{
      justify-content: flex-end;


    }
  }
}
</style>
