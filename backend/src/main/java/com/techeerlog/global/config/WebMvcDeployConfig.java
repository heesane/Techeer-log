package com.techeerlog.global.config;

import com.techeerlog.global.support.AuthInterceptor;
import com.techeerlog.global.support.token.AuthenticationPrincipalArgumentResolver;
import com.techeerlog.global.support.token.TokenManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.method.HandlerTypePredicate;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
@Profile("deploy")
public class WebMvcDeployConfig implements WebMvcConfigurer {

    private static final String ALLOW_METHOD_NAMES = "GET,HEAD,POST,DELETE,TRACE,OPTIONS,PATCH,PUT";

    private final AuthInterceptor authInterceptor;
    private final TokenManager tokenManager;

    public WebMvcDeployConfig(AuthInterceptor authInterceptor, TokenManager tokenManager) {
        this.authInterceptor = authInterceptor;
        this.tokenManager = tokenManager;
    }

    // 수정 필요
    // 차후에 주석 해제 해야함

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // CORS 설정을 모든 URL에 적용
                .allowedOrigins("http://www.techeer.site",       // 혀용할 도메인 목록
                        "https://www.techeer.site",
                        "https://techeer-log.vercel.app")
                .allowedMethods(ALLOW_METHOD_NAMES.split(","))  // 허용할 HTTP Method 목록
                .allowedHeaders("*")        // 모든 HTTP header 허용
                .allowCredentials(true)     // 자격 증명 허용
                .exposedHeaders(HttpHeaders.LOCATION, HttpHeaders.AUTHORIZATION, "Refresh-Token");  // 클라이언트에 노출할 헤더 목록
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("/api/v1/auth/anonymous")
                .excludePathPatterns("/api/v1/enums")
                .excludePathPatterns("/api/v1/health")
                .excludePathPatterns("/swagger-ui.html", "/swagger-ui/**", "/api/v3/api-docs/**");
    }

    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        configurer.addPathPrefix("/api", HandlerTypePredicate.forAnnotation(RestController.class, Controller.class));
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(authenticationPrincipalArgumentResolver());
    }

    @Bean
    public AuthenticationPrincipalArgumentResolver authenticationPrincipalArgumentResolver() {
        return new AuthenticationPrincipalArgumentResolver(tokenManager);
    }
}