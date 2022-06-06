<template>
<div>
	<header>
		<h1><router-link to="/main">외부인 환영</router-link></h1>
		<div class="menuWrap">
			<div class="icon nav-icon-5" :class="{'open' : openMenu}" @click="openMenu=!openMenu">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul :class="{'open' : openMenu}">
				<li><router-link to="/info" @click="openMenu=!openMenu">전시 및 작품 소개</router-link></li>
				<li><router-link to="/gallery" @click="openMenu=!openMenu">갤러리</router-link></li>
			</ul>
		</div>
	</header>
</div>
</template>

<script>
export default {
	data() {
	return {
		openMenu : false
	}
	},
	created() {
	},
	methods : {
	}
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; background-color:#ffffff;height:132px; border-bottom:1px solid #000000}
header{
	display: flex;
    justify-content: space-between;
    align-items: center;
}
header h1{
	font-size:58px;
	font-weight: normal;
	margin-left: 30px;
}
.nav-icon-5{
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.nav-icon-5 span{
  background-color:#000000;
  position: absolute;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
  width:100%;
  height: 4px;
  transition-duration: 500ms
}
.nav-icon-5 span:nth-child(1){
  top:0px;
  left: 0px;
}
.nav-icon-5 span:nth-child(2){
  top:13px;
  left: 0px;
  opacity:1;
}
.nav-icon-5 span:nth-child(3){
  bottom:0px;
  left: 0px;
}
.nav-icon-5:not(.open):hover span:nth-child(1){
  transform: rotate(-3deg) scaleY(1.1);
}
.nav-icon-5:not(.open):hover span:nth-child(2){
  transform: rotate(3deg) scaleY(1.1);
}
.nav-icon-5:not(.open):hover span:nth-child(3){
  transform: rotate(-4deg) scaleY(1.1);
}
.nav-icon-5.open span:nth-child(1){
  transform: rotate(45deg);
  top: 13px;
}
.nav-icon-5.open span:nth-child(2){
  opacity:0;
}
.nav-icon-5.open span:nth-child(3){
  transform: rotate(-45deg);
  top: 13px;
}
.nav-list{
	font-size:20px;
	background-color:#FBFFF5;
}
.menuWrap ul {
	position: absolute;
	right: 0;
	top: 132px;
	z-index: 1;
	background: #FBFFF5;
	margin: 0;
	padding:0px;
	border:0.75px solid #000000;
	opacity: 0;
}
.menuWrap ul li{
	list-style:none;
	border-bottom:0.75px solid #000000;
	font-size:38px;
	padding: 20px;
	height:0px;
	-webkit-transition: height 200ms ease-in;
	-moz-transition: height 200ms ease-in;
	-o-transition: height 200ms ease-in;
	transition: height 200ms ease-in;
	visibility: 0;
}
.menuWrap ul.open{
	opacity: 1;
}
.menuWrap .open li{
	height: 40px;
	visibility: 1;
}
</style>