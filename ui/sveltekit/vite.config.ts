import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0', // Docker 컨테이너 외부에서 접근 가능하게 설정
		port: 3000       // UI에서 사용할 포트
	}
});
