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
      <button class="info">
        (주)호텔롯데 롯데면세점 사업자정보 및 법적고지
      </button>
      <!-- slide-up-down -->
      <div class="bussiness_info">
        <div class="info">
          <h2>주) 호텔롯데 롯데면세점 대표이사 : 이갑</h2>
          <div class="info_button">
            <button type="button" class="">사업자 정보 확인</button>
            <button type="button" class="law">법인 사업자 정보</button>
          </div>
          <div class="slideUpdown">
            <ul>
              <li>
                서울특별시 중구 을지로30(소공동)
              </li>
              <li>
                호스팅 사업자 : 롯데쇼핑(주)e-커머스사업본부
              </li>
              <li>
                통신판매 신고 : 중구 제07647호
              </li>
              <li>
                사업자등록번호 : 104-85-18866
              </li>
              <li>
                고객센터 1688-3000
              </li>
              <li>
                lottedfs@lottedfs.co.kr / 구매안전 서비스
              </li>
              <li>
                시각장애 지원센터 : 02-2029-1811
              </li>
              <li>
                롯데인터넷면세점의 운영자인 (주)호텔롯데 롯데면세점은
                월드타워점,코엑스점, 부산점, 제주점,일본긴자점 상품의 판매에
                있어 거래당사자가 아닌 중개자이며 해당 상품 거래에 대한 모든
                책임과 의무는 롯데면세점 월드타워점, 롯데면세점 코엑스점,
                (주)부산롯데호텔 롯데부산면세점, 롯데면세점제주(주),
                (주)롯데면세점 JAPAN에 있습니다.
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
          <div class="copy_right">
            Copyright ⓒ Lottehotel. All rights Reserved.
          </div>
        </div>
      </div>
    </div>
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

  .business_info {
    width: 100%;
    padding: 30px 0 20px 0;

    .info {
      display: block;
      width: 100%;
      color: #999;
      font-size: 15px;

      &:after {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        background: url("~@/assets/img/icon_footer_arrowup.png") no-repeat 0 0;
        background-size: 10px;
        vertical-align: middle;
        margin-left: 5px;
      }
    }

    .bussiness_info {
      display: block;
      border-top: 1px solid #999;
      margin: 15px;
      .info {
        font-size: 12px;
        line-height: 15px;
        color: #999;
        padding-top: 15px;

        h2 {
          font-size: 10px;
          line-height: 13px;
        }

        .info_button {
          margin: 8px 0;

          button {
            background: #f5f5f5;
            color: #333;
            text-align: center;
            width: 80px;
            height: 18px;
            margin-left: 5px;

            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>
