<template>
  <main-layout>
    <div style="height:180px"></div>
    <div class="container-box">
      <div class="row login-container">
        <div class="container-left">
          <div class="container-icon"><img src="../../static/img/NeoLogo.svg" alt=""></div>
          <div class="container-title" @click="cutModual('nep6')" :class="{'active':!(moudle_generate||moudle_download)}">
            <span ref="login">{{$t("login.login")}}</span>
          </div>
          <div class="container-title" @click="cutModual('generate')" :class="{'active':(moudle_generate || moudle_download)}">
            <span ref="login">{{$t("generate.generate")}}</span>
          </div>
        </div>
        <div class="container-right">
          <div v-if="moudle_nep6" class="nep6-imp">
            <div class="title-login">
              <span>
                {{$t("login.title")}}
              </span>
            </div>
            <div class="input-login">
              <div class="input-group nel-input-blg">
                <input type="text" class="form-control" :placeholder="$t('login.selectplaceholder')" disabled="true" v-model="filename" autocomplete="off">
                <span class="input-group-addon">
                  <button class="btn btn-nel fileinput-button">
                    <span>{{$t("login.selectbtn")}}</span>
                  </button>
                  <input class="select-file" type="file" @change="fileChange">
                </span>
              </div>
            </div>
            <div class="input-login" style="padding-top:40px;">
              <div class="input-group nel-input-blg">
                <input class="form-control" :placeholder="$t('login.passwordholder')" type="password" v-model="password" @keyup.enter="loginFile" autocomplete="off">
                <span class="input-group-addon">
                  <button class="btn btn-nel fileinput-button" @click="loginFile">
                    {{$t("login.login")}}
                  </button>
                </span>
              </div>
            </div>
            <div style="height:36px;padding-top:80px;padding-bottom:30px; text-align:center">
              <hr width="80%" color="#987cb9">
              <div class="hr-more">{{$t("login.cutlinemsg")}}</div>
            </div>
            <div style="width:417px; margin:0 auto; padding-top:30px">
              <button class="btn btn-nel btn-import" @click="cutModual('wif')">{{$t("login.wifmsg")}}</button>
            </div>
            <div style="width:417px; margin:0 auto; padding-top:20px;padding-bottom: 5.9%;">
              <button class="btn btn-nel btn-import" @click="cutModual('nep2')">{{$t("login.nep2msg")}}</button>
            </div>
          </div>
          <div v-if="moudle_wif" class="wif_imp">
            <div class="title-login">
              <span>{{$t("wif.title")}}</span>
            </div>
            <div class="nel-input-blg"><input type="text" :placeholder="$t('wif.wifplaceholder')" v-model="wif" autocomplete="off"></div>
            <div class="login-btn">
              <button class="btn btn-nel btn-import" @click="loginWif">{{$t("login.login")}}</button>
            </div>
            <div class="back">
              <a @click="cutModual('nep6')">&lt; {{$t("wif.back")}}</a>
            </div>
          </div>
          <div v-if="moudle_nep2" class="nep2_imp">
            <div class="title-login">
              <span>Nep2</span>
            </div>
            <div class="nel-input-blg"><input type="text" :placeholder="$t('nep2.placeholder')" v-model="nep2" autocomplete="off"></div>
            <div class="nel-input-blg"><input type="password" :placeholder="$t('nep2.password')" v-model="nep2pwd" autocomplete="off"></div>
            <div class="login-btn">
              <button class="btn btn-nel btn-import" @click="loginNep2">{{$t("login.login")}}</button>
            </div>
            <div class="back">
              <a @click="cutModual('nep6')">&lt; {{$t("wif.back")}}</a>
            </div>
          </div>
          <div class="generate" v-if="moudle_generate">
            <div class="title-login">
              <span>{{$t("generate.title")}}</span>
            </div>
            <div :class="nameerr!=''?( nameerr == 'true' ?'err':'success') :''">
              <div class="nel-input-blg"><input type="text" :placeholder="$t('generate.name')" @input="verifyName" @blur="verifyName" v-model="walletname" autocomplete="off">
              </div>
              <div class="message">
                <p v-if="nameerr=='true'"><img src="../../static/img/wrong.svg" alt="">&nbsp;&nbsp; {{$t('generate.nameempty')}}</p>
                <p v-if="nameerr=='false'"><img src="../../static/img/correct.svg" alt="">&nbsp;&nbsp; {{$t('generate.namepass')}}</p>
              </div>
            </div>
            <div :class="pwderr!=''?( pwderr == 'true' ?'err':'success') :''">
              <div class="nel-input-blg">
                <input type="password" :placeholder="$t('generate.password')" @input="verifypwd" @blur="verifypwd" v-model="walletpwd" autocomplete="off">
              </div>
              <div class="message">
                <p v-if="pwderr=='true'">
                  <img src="../../static/img/wrong.svg" alt="">&nbsp;&nbsp; {{pwdmsg}}
                </p>
                <p v-if="pwderr=='false'">
                  <img src="../../static/img/correct.svg" alt="">&nbsp;&nbsp; {{$t('generate.namepass')}}
                </p>
              </div>
            </div>
            <div :class="confirmerr!=''?( confirmerr == 'true' ?'err':'success') :''">
              <div class="nel-input-blg">
                <input type="password" :placeholder="$t('generate.passwordagain')" @input="verifyConfirm" @blur="verifyConfirm" v-model="confirmpwd" autocomplete="off">
              </div>
              <div class="message">
                <p v-if="confirmerr=='true'">
                  <img src="../../static/img/wrong.svg" alt="">&nbsp;&nbsp; {{$t('generate.pwderrmsg3')}}
                </p>
                <p v-if="confirmerr=='false'">
                  <img src="../../static/img/correct.svg" alt="">&nbsp;&nbsp; {{$t('generate.namepass')}}
                </p>
              </div>
            </div>
            <div class="login-btn">
              <button class="btn btn-nel btn-import" @click="generate()">{{$t("generate.generate")}}</button>
            </div>
          </div>
          <div class="generate download" v-if="moudle_download">
            <div class="title-login">
              <span>{{$t("generate.createmsg")}}</span>
            </div>
            <p class="guide">{{$t("generate.downloadmsg")}}</p>
            <div class="login-btn">
              <a class="btn btn-nel btn-import" :download="download_name" :href="download_href">{{$t("generate.download")}}</a>
            </div>
            <div class="remind">
              <p class="title-remind">{{$t("generate.msg")}}</p>
              <p class="content-remind">{{$t("generate.msg2")}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script lang="ts" src="./login.ts">
</script>

<style scoped>
.guide {
  padding-bottom: 30px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #b2b2b2;
  line-height: 16px;
}
.generate.download {
  text-align: center;
}
.generate.download .remind {
  padding-bottom: 18.7%;
}
.generate.download .title-remind {
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #333333;
  line-height: 24px;
  display: inline;
}
.generate.download .content-remind {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #b2b2b2;
  line-height: 20px;
  display: inline;
}
.generate .message {
  height: 30px;
  width: 417px;
  margin: 0 auto;
}
.generate .message img {
  height: 15px;
  width: 15px;
}
.generate .title-login {
  padding-top: 10.4%;
  margin-bottom: 8.6%;
}
.generate .login-btn {
  margin-top: 1%;
  padding-bottom: 10.4%;
}
.container-box {
  width: 883px;
  min-width: 883px;
  margin: 0 auto;
}
.container-left {
  width: 185px;
  height: 580px;
  float: left;
  background: #151a1e;
  border-radius: 10px 0 0 10px;
}
.container-left .container-icon {
  height: 116px;
  text-align: center;
  margin: 0 auto;
  line-height: 116px;
}

.container-left .container-title {
  padding-top: 20px;
  text-align: center;
  height: 70px;
  font-family: PingFangSC-Medium;
  font-size: 20px;
}
.container-title > span {
  color: #b2b2b2;
}
.container-title.active {
  background: #198cee;
  border-radius: 10px 0 0 10px;
  position: relative;
  z-index: 1000;
  margin-left: -8px;
}
.container-title.active > span {
  color: #ffffff;
}

.login-btn {
  width: 417px;
  margin: 0 auto;
}
.nep2_imp .login-btn {
  padding-bottom: 7.1%;
}
.wif_imp .login-btn {
  padding-bottom: 11.1%;
  padding-top: 4.9%;
}
.wif_imp input {
  font-size: 16px;
  line-height: 16px;
  height: 56px;
}
.back {
  padding-bottom: 8.4%;
  width: 417px;
  margin: 0 auto;
}
.back > a {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #b2b2b2;
  line-height: 18px;
}
.wif_imp .title-login {
  padding-top: 13.3%;
  padding-bottom: 13.4%;
}
.nep2_imp .title-login {
  padding-top: 13.3%;
  padding-bottom: 7.8%;
}
.nep2_imp .nel-input-blg {
  margin-bottom: 4.3%;
}
.nep6-imp .title-login {
  padding-bottom: 13.4%;
  padding-top: 5.9%;
}
.nep6-imp .input-login {
  height: 56px;
  width: 417px;
  margin: 0 auto;
}
.title-login {
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #198cee;
  line-height: 30px;
  text-align: center;
}
.nel-input-blg {
  border-radius: 5px;
  width: 417px;
  height: 56px;
  margin: 0 auto;
}
.nel-input-blg input {
  height: 56px;
}
.hr-more {
  height: 20px;
  width: 129px;
  position: relative;
  left: 50%;
  top: -30px;
  margin-left: -65px;
  font: normal 1.2em/20px;
  vertical-align: middle;
  text-align: center;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 14px;
  color: #b2b2b2;
  line-height: 14px;
}
.login-container {
  background: #ffffff;
  box-shadow: 0 2px 10px 0 #2c80c8;
  border-radius: 10px;
}
.login-container .container-right {
  width: 680px;
  height: 580px;
  float: right;
  background: #ffffff;
  border-radius: 0 10px 10px 0;
}
.input-group-addon {
  padding: 0;
  border: 0;
  position: relative;
}

.fileinput-button {
  border: 0;
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 97px;
  height: 56px;
  border-radius: 0px 5px 5px 0px;
}
.select-file {
  position: absolute;
  right: 0px;
  top: 0px;
  opacity: 0;
  z-index: 2;
  width: 97px;
  /* -ms-filter: 'alpha(opacity=0)'; */
  /* font-size: 200px; */
}
.btn-import {
  width: 417px;
  height: 50px;
  margin: 0 auto;
}
</style>
