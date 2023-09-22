<script lang="ts">
	import { setupIonicBase } from 'ionic-svelte';

	/* Theme variables */
	import '../theme/ionic-theme.css';

	/* load and register all components - you can also import separately to code split */
	// import 'ionic-svelte/components/all';
	import 'ionic-svelte/components/ion-app';
	import 'ionic-svelte/components/ion-button';

	/* run base configuration code from ionic/core */
	setupIonicBase();
</script>

<ion-app>
	<slot />
</ion-app>
