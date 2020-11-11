<template>
  <section class="headerWrapNew">
    <div class="gnbTab">
      <ul>
        <li
          class="gnbMenu"
          v-for="(item, idx) in moduleUI.tabMenu"
          :key="`item${idx}`"
        >
          <button
            type="button"
            :class="{ active: currentTab === idx }"
            @click="selectTab(idx)"
          >
            {{ item.menuNm }}
          </button>
          <div class="tabLnbMenuWrap">
            <ul>
              <li
                class="subMenu"
                v-for="(item, idx) in moduleUI.tabMenu[0].tabSubMenu"
                :key="`item${idx}`"
              >
                <a href="#none">
                  {{ item.subMenuNm }}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0,
      isSelected: false,
      moduleUI: {
        tabMenu: [
          {
            id: 1,
            menuNm: "SHOP",
            tabSubMenu: [
              {
                subMenuNm: "기획전",
                url: "#none"
              },
              {
                subMenuNm: "랭킹&트랜딩",
                url: "#none"
              },
              {
                subMenuNm: "개인화",
                url: "#none"
              },
              {
                subMenuNm: "브랜딩",
                url: "#none"
              }
            ]
          },
          {
            id: 2,
            menuNm: "EVENT",
            tabSubMenu: [
              {
                subMenuNm: "기획전",
                url: "#none"
              },
              {
                subMenuNm: "랭킹&트랜딩",
                url: "#none"
              },
              {
                subMenuNm: "개인화",
                url: "#none"
              },
              {
                subMenuNm: "브랜딩",
                url: "#none"
              }
            ]
          },
          {
            id: 3,
            menuNm: "TRIP",
            tabSubMenu: [
              {
                subMenuNm: "기획전",
                url: "#none"
              },
              {
                subMenuNm: "랭킹&트랜딩",
                url: "#none"
              },
              {
                subMenuNm: "개인화",
                url: "#none"
              },
              {
                subMenuNm: "브랜딩",
                url: "#none"
              }
            ]
          }
        ]
      }
    };
  },

  created() {},

  mounted() {},

  methods: {
    selectTab(idx) {
      this.currentTab = idx;
    }
  }
};
</script>

<style lang="scss" scoped>
.headerWrapNew {
  .gnbTab {
    background: #000;
    .gnbMenu {
      display: inline-block;
      justify-content: space-around;
      width: 33.3%;
      height: 50px;
      margin: 0 auto;
      vertical-align: top;
      text-align: center;
      > button {
        width: 100%;
        height: 50px;
        font-size: 13px;
        color: #fff;

        &.active {
          font-weight: bold;
          + .tabLnbMenuWrap {
            display: block;
            position: absolute;
            top: 50px;
            left: 0;
            width: 100%;
            height: 40px;
          }
        }
      }
    }
  }

  .tabLnbMenuWrap {
    display: none;
    background: #fff;
    width: 100%;
    overflow: scroll;

    ul {
      overflow-x: scroll;
      width: calc(100% + 50px);

      .subMenu {
        display: inline-block;
        width: 25%;
        height: 40px;

        > a {
          line-height: 40px;
          color: #000;
          text-align: center;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
