package consolelog.project.enums;

import consolelog.global.support.EnumModel;
import lombok.Getter;

@Getter
public enum ProjectStatusEnum implements EnumModel {
    RUNNING("RUNNING"), COMPLETED("COMPLETED"), PREPARING("PREPARING");

    private final String name;

    ProjectStatusEnum(String name) {
        this.name = name;
    }
}
