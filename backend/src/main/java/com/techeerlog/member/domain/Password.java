package com.techeerlog.member.domain;

import com.techeerlog.auth.domain.encryptor.EncryptorI;
import com.techeerlog.member.exception.InvalidPasswordFormatException;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;

import java.util.Objects;
import java.util.regex.Pattern;

@Getter
@Embeddable
public class Password {
    private static final Pattern PATTERN =
            Pattern.compile("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$");

    @Column(name = "password")
    private String value;

    //encryptor  추가해야함
    protected Password() {
    }

    public static Password of(EncryptorI encryptor, String password) {
        // validate(password);
        return new Password(encryptor.encrypt(password));
    }

    public Password(String value) {
        this.value = value;
    }

    public static void validate(String value) {
        if (!PATTERN.matcher(value).matches()) {
            throw new InvalidPasswordFormatException();
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }

        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Password password = (Password) o;
        return getValue().equals(password.getValue());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getValue());
    }

}
