<template>
  <div>
    <div class="container">
      <div class="title">
        <span>{{$t('nns.title1')}}</span>
      </div>
      <div class="form-inline">
        <div class="input-group nns-register" v-bind:class="domainerr?'input-err':'input-success'">
          <input
            @input="verifyDomain"
            type="text"
            class="nel"
            v-model="nnsstr"
            :placeholder="$t('nns.placeholder1')"
            autocomplete="off"
          >
          <span class="input-group-addon nel">
            <span>{{network}}</span>
          </span>
        </div>
        <button
          class="btn btn-nel btn-big"
          @click="nnsRegister"
          v-if="btn_register"
        >{{$t('nns.register')}}</button>
        <spinner-wrap v-else style="margin-left:20px"></spinner-wrap>
        <div class="err-color" style="padding-left:50px;padding-top:10px;">
          <span>{{errmsg}}</span>
        </div>
      </div>

      <div class="title">
        <span>{{$t('nns.title2')}}</span>
        <div style="display:inline-block">
          <bubble-wrap :isdisable="receive_disable"></bubble-wrap>
        </div>
      </div>
      <div class="form-inline" v-for="domain in domainarr" :key="domain.index">
        <!-- <span class="msg-null" v-if="!domain.resolver&&domain.resolver==''">
          ( not configured )
        </span>-->
        <!-- <div class="row"> -->
        <div class="left-box">
          <span class="domainname">{{domain.domainname}}</span>
          <br>
          <span class="msg-resolver">
            ( {{$t('nns.text1')}} : {{domain.resolver}})
            <br>
          </span>
          <span class="msg-resolver">
            ( {{$t('nns.text2')}} : {{domain.mapping}})
            <br>
          </span>
          <span class="msg-resolver">( {{$t('nns.text3')}} : {{domain.time}})</span>
          <span
            class="msg-resolver state-lable"
          >{{domain.isExpiration?"("+$t('nns.text4')+")":""}} {{domain.await_register?"("+$t('nns.waiting')+")":""}}</span>
        </div>
        <div class="right-box">
          <button
            v-if="!domain.await_register"
            class="btn btn-nel"
            @click="resolve(domain)"
          >{{$t('nns.edit')}}</button>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <v-alert ref="alert">
      <div class="content content-file">
        <span class="content-des">{{$t('nns.alerttitle1')}} : {{alert_domain}}</span>
        <span class="content-msg"></span>
      </div>
      <div class="content content-verify">
        <span class="content-des">{{$t('nns.alerttitle2')}} :</span>
        <span class="content-msg warning-msg">( {{$t('nns.alertmessage1')}} )</span>
        <div class="input-warp">
          <input
            type="text"
            :value="alert_contract"
            class="input-ico input-disabled"
            disabled="disable"
            autocomplete="off"
          >
          <span class="correct-icon" v-if="alert_resolver_state==2">
            <img src="../../../static/img/correct.svg" alt>
          </span>
          <div class="btn-verify-warp">
            <button
              class="btn-nel btn-verify"
              v-if="alert_resolver_state==0"
              @click="setresolve()"
            >{{$t('btn.confirm')}}</button>
            <spinner-wrap v-if="alert_resolver_state==1"></spinner-wrap>
            <button
              class="btn-nel btn-verify"
              v-if="alert_resolver_state==2"
              @click="setresolve()"
            >{{$t('btn.reset')}}</button>
          </div>
        </div>
      </div>
      <div class="content content-verify">
        <span class="content-des">{{$t('nns.alerttitle3')}} :</span>
        <span class="content-msg"></span>
        <div class="input-warp">
          <input
            type="text"
            v-model="alert_addr"
            class="input-ico"
            :class="mapping_err=='0'?'input-success':mapping_err=='1'?'input-err':''"
            @input="verifyMappingAddress"
            autocomplete="off"
          >
          <span class="correct-icon" v-if="alert_config_state==2">
            <img src="../../../static/img/correct.svg" alt>
          </span>
          <div class="btn-verify-warp" style="margin-left:25px">
            <button
              v-if="alert_config_state==0"
              class="btn-nel btn-verify"
              @click="configResolve()"
            >{{$t('btn.confirm')}}</button>
            <button
              v-if="alert_config_state==2"
              class="btn-nel btn-verify"
              @click="configResolve()"
            >{{$t('btn.reset')}}</button>
            <spinner-wrap v-if="alert_config_state==1"></spinner-wrap>
          </div>
        </div>
        <div v-if="mapping_err=='1'" class="err-color">{{$t('nns.alertmessage2')}}</div>
      </div>
    </v-alert>
    <v-confirm ref="tranConfirm"></v-confirm>
  </div>
</template>

<script lang="ts" src="./nns.ts">
</script>

<style scoped>
.correct-icon {
  position: absolute;
  top: 17px;
  left: 614px;
}
.input-err {
  box-shadow: 0 0 3px 0 rgba(255, 106, 106, 0.5);
}
.input-success {
  box-shadow: 0 0 3px 0 rgba(45, 222, 79, 0.5);
}
.err-color {
  color: #ff6a6a;
}
.container .form-inline {
  background: #454f60;
  padding-top: 50px;
  padding-bottom: 60px;
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
}
.right-box {
  position: absolute;
  top: 50%;
  right: 30px;
  margin-top: -19px;
}
.nns-register {
  background: #454f60;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  width: 400px;
  margin-bottom: 0px;
  height: 56px;
  margin-left: 50px;
}
.nns-register > input,
.nns-register > span {
  background: #454f60;
  border: 0;
  height: 56px;
  line-height: 16px;
  font-size: 16px;
  margin: 0 auto;
}
.container .form-inline > input {
  background: #454f60;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  width: 400px;
  margin-bottom: 0px;
  height: 56px;
  margin-left: 50px;
}
.domainname {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #ffffff;
  line-height: 16px;
  padding-left: 50px;
}
.msg-null {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #c5c5c5;
  line-height: 14px;
  padding-left: 50px;
}
.msg-resolver {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #ffffff;
  line-height: 14px;
  padding-left: 50px;
}
.state-lable {
  color: darkgoldenrod;
}

h4 {
  margin-left: 20px;
}
p {
  text-align: center;
}
</style>

