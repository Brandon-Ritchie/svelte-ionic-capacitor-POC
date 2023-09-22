import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'svelte-ionic-capacitor-poc',
	webDir: 'build',
	server: {
		androidScheme: 'https',
		cleartext: true
	}
};

export default config;
