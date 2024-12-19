package com.techeerlog.global.support;

import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.util.Arrays;

@Component("customKeyGenerator")
public class CustomKeyGenerator implements KeyGenerator {

    @Override
    public Object generate(Object target, Method method, Object... params) {

        // 결과 생성 (첫 번째 요소만 사용)
        return params.length > 0 ? String.valueOf(params[0]) : "null";
    }
}
