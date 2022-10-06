<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/login.css">
    <title>로그인</title>
    <style>
        #doc-container{width:100%;min-width:1142px;min-height:100%}
    </style>
</head>
<body>
<main id="doc-contents">
			<div class="signup-wrap">
				<fieldset class="login-form-wrap">
					<h2 class="signup-txt-dash"><span>로그인</span></h2>

	<form id="commonRegLogin" action="/cust/login/j_spring_security_check" method="post" accept-charset="UTF-8">  
	<input type="hidden" id="returnurl" name="returnurl" value="2F696e6465782e6773">
	<input type="hidden" id="captchaFlg" name="captchaFlg" value="false">
	<input type="hidden" id="snsFlg" name="snsFlg" value="">
	<input type="hidden" id="snsAccess" name="snsAccess" value="">
	<input type="hidden" id="snsRefresh" name="snsRefresh" value="">
	<input type="hidden" id="kakaoLoginUrl" value="https://kauth.kakao.com/oauth/authorize?response_type=code&amp;client_id=009866fb7881d62f94177d2988825a75&amp;redirect_uri=https://www.gsshop.com/cust/login/chkKakaoLogin.gs&amp;service_terms=account_email,name,phone_number,account_ci,plusfriends,trms01,trms02,trms03,trms04,advrsms,advremail,14agechk&amp;state=LOGIN_eqmhv5k20lkfbcqn8opinvkb30"> 
	<input type="hidden" id="naverLoginUrl" value="https://nid.naver.com/oauth2.0/authorize?response_type=code&amp;client_id=lKFdFcYB3_zG0kl3EjH6&amp;redirect_uri=https://www.gsshop.com/cust/login/chkNaverLogin.gs&amp;state=LOGIN_eqmhv5k20lkfbcqn8opinvkb30">
	<input type="hidden" id="retUrl" value="2F696e6465782e6773">
	<input type="hidden" id="isPrdOrder" value="">
	<input type="hidden" id="confirmNumber" name="confirmNumber" value="">
	<input type="hidden" id="captchaLoginType" name="captchaLoginType" value="">
	<input type="hidden" id="autoIdFlg" name="autoIdFlg" value="">
	<input type="hidden" name="failCnt" value="">
	<dl class="signup-form">
		<dt class="blind"><label for="user_cell">아이디</label></dt>
		<dd>
			<div class="gui-input giant">
				<input type="text" id="id" name="id" placeholder="아이디 또는 이메일주소" maxlength="50" autocomplete="off" value="" data-form="mail">
				<em class="err-msg" id="noti_id_msg">아이디 또는 비밀번호를 다시 확인하세요.</em>
			</div>
		</dd>
		<dt class="blind"><label for="user_name">비밀번호</label></dt>
		<dd>
			<div class="gui-input giant">
				<input type="password" id="passwd" name="passwd" placeholder="비밀번호 (영문+숫자 6~16자)" maxlength="16">
				<em class="err-msg" id="noti_passwd_msg">아이디 또는 비밀번호를 다시 확인하세요.</em>
			</div>
		</dd>
	</dl>

	<div class="signup-btns">
		<button type="button" class="gui-btn giant lime" id="btnLogin"><strong>로그인</strong></button>

		<div class="login-member-opt">
			<span class="gui-check float">
				<input type="checkbox" id="btnIdSave" checked="checked">
				<label for="btnIdSave"><i></i>아이디 저장</label></span>
			
			<span class="float-r">
				<a href="javascript:;" id="idSrch"><span class="hoverline">아이디 찾기</span></a>
				<a href="javascript:;" id="pwSrch"><span class="hoverline">비밀번호 찾기</span></a>
			</span>
		</div>
		<a href="./join.php" class="gui-btn huge" id="memJoin"><strong>회원가입</strong></a>
	
	</div>
</form>


					<article id="modal-capcha" class="md-box" style="display:none">
	<article class="md-wrap">
		<main class="md-main">
			<article class="security-code">
				<p class="desc-type" id="modal-capcha-desc">안전한 로그인을 위해<br>아래 보안문자를 입력해주세요.</p>
				<div class="capcha-box">
					<div class="security-code-img"><img src="/cust/login/simpleCaptcha.png?id=390937806" id="capchaimg" name="capchaimg" alt="보안문자 이미지"></div>
					<button class="gui-btn security-code_reload" onclick="gs.captchaRefresh()"><span>새로고침</span></button>
					<button class="gui-btn security-code_sound" onclick="gs.captchaSoundPlay()"><span>음성듣기</span></button>
				</div>
				<div class="gui-input huge">
					<input type="number" id="confirmNum" name="confirmNum" class="only-num" pattern="[0-9]*" inputmode="numeric" maxlength="6" placeholder="상단문자 6자리" autocomplete="off">
					<em class="err-msg" id="noti_confirmNumber_msg">보안문자가 일치하지 않습니다.</em>
				</div> 
			</article>
		</main>
		<footer class="md-footer">
			<div class="flex-wrap col2">
				<button class="gui-btn lightgray" onclick="gs.captchaClose();"><strong>취소</strong></button>
				<button class="gui-btn lightgray" id="capchaConfirmBtn"><strong>확인</strong></button>
			</div>
		</footer>
	</article>
</article>
<span id="audioCaptcha" style="display:none;"></span>
<iframe style="display: none" id="ifmAudioCaptcha"></iframe>
				</fieldset>
			</div>
		</main>
</body>
</html>