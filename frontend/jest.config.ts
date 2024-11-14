import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // ts-jest를 사용하여 TypeScript 지원
  testEnvironment: 'jsdom', // React 컴포넌트 테스트를 위한 브라우저 환경,
  verbose: true, // 개별 테스트 결과 출력
  collectCoverage: true, // 테스트 코드 커버리지 수집, 결과파일 생성
};

export default config;
