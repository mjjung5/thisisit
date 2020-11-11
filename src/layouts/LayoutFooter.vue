<template>
  <footer class="lotteNewFooter">
    <div class="footerTopWrap">
      <div class="footerInform">
        <dl class="currency">
          <dt>오늘의 환율</dt>
          <dd>$1=1,182원</dd>
        </dl>

        <dl class="customer">
          <dt>고객센터</dt>
          <dd>1688-3000</dd>
        </dl>
      </div>

      <div class="iconChat">
        <button type="button">
          <span>1:1 채팅</span>
        </button>
      </div>
    </div>
    <div class="footer_menu">
      <ul>
        <li
          v-for="(item, index) in moduleUI.footerMenu"
          :key="index"
          :class="{ on: currentTab === index }"
          @click="footerMenuClick"
        >
          <a href="#none">{{ item }}</a>
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
  data() {
    return {
      currentTab: 0,
      moduleUI: {
        footerMenu: [
          "개인정보처리방침",
          "그린회원약관",
          "영상정보처리관리방침",
          "이용약관"
        ]
      }
    };
  },

  methods: {
    footerMenuClick() {
      console.log("click footer");
    }
  }
};
</script>

<style lang="scss" scoped>
.lotteNewFooter {
  .footerTopWrap {
    display: flex;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    padding: 20px 15px;

    .footerInform {
      display: flex;
      width: 80%;

      dl {
        &.currency {
          flex: 1;
          justify-content: flex-start;
        }

        &.customer {
          justify-content: flex-end;
        }

        dt {
          font-size: 14px;
          color: #999;
          padding-bottom: 5px;
        }

        dd {
          font-size: 14px;
          color: #000;
          font-weight: bold;
        }
      }
    }
    .iconChat {
      margin: 0 auto;

      &::before {
        content: "";
        display: inline-block;
        width: 1px;
        background: #ccc;
        margin: 0 10px 0 11px;
        height: 30px;
      }

      button {
        span {
          font-size: 14px;
          font-weight: bold;
          text-align: center;
        }
      }
    }
  }

  .footer_menu {
    font-size: 12px;
    color: #000;
    padding: 20px 0;

    ul {
      li {
        float: left;
        margin-left: 15px;
        text-align: center;

        &.on {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
