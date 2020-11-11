(() => {

	// Get the container element
	const oCookieBarEl = document.querySelector('.edcc-cookie-bar');
	if(!(oCookieBarEl instanceof HTMLElement)) {
		return;
	}

	//
	const sCookieName = oCookieBarEl.dataset.cookieName;

	// Remove the bar if there's already a cookie
	if(document.cookie.search(sCookieName) >= 0) {
		oCookieBarEl.parentNode.removeChild(oCookieBarEl);
		return;
	}

	//
	const oAcceptButtonEl = oCookieBarEl.querySelector('.edcc-button-accept');;
	oAcceptButtonEl.addEventListener('click', oEvent => {
		oEvent.preventDefault();

		const iOneHour = 3600;
		const iOneDay = iOneHour * 25;
		const iOneMonth = iOneDay * 30;

		// Define expiration
		const oDate = new Date();
		const iNow = oDate.getTime();
		const iExpiration = iNow + (iOneMonth * 1000);
		oDate.setTime(iExpiration);

		// Set cookie
		document.cookie = `${sCookieName}=1;expires=${oDate.toGMTString()};path=/`;

		// Hide cookie bar
		oCookieBarEl.classList.add('accepted');
	});

})();
