package com.techeerlog.auth.service;

import com.techeerlog.global.exception.InvalidRefreshTokenException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.concurrent.TimeUnit;

@Service
@Transactional(readOnly = true)
public class RefreshTokenService {

    private final RedisTemplate<String, String> redisTemplate;
    private final long refreshTokenValidityMilliseconds;

    public RefreshTokenService(RedisTemplate<String, String> redisTemplate,
                               @Value("${security.jwt.token.expire-length.refresh}") long refreshTokenValidityMilliseconds) {
        this.redisTemplate = redisTemplate;
        this.refreshTokenValidityMilliseconds = refreshTokenValidityMilliseconds;
    }

    @Transactional
    public void saveToken(String token, Long memberId) {
        // Redis에 저장 - 만료 시간 설정을 통해 자동 삭제 처리
        redisTemplate.opsForValue().set(
                memberId.toString(),
                token,
                refreshTokenValidityMilliseconds,
                TimeUnit.MILLISECONDS
        );
    }

    @Transactional
    public void matches(String refreshToken, Long memberId) {
        String savedToken = redisTemplate.opsForValue().get(memberId.toString());

        if (savedToken == null || !savedToken.equals(refreshToken)) {
            throw new InvalidRefreshTokenException();
        }
    }

    @Transactional
    public void deleteToken(Long memberId) {
        redisTemplate.delete(memberId.toString());
    }
}
