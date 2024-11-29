package com.techeerlog.member.dto;

import lombok.Getter;

@Getter
public class UpdatePasswordRequest {
    String currentPassword;
    String newPassword;
}
