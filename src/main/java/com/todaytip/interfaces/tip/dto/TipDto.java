package com.todaytip.interfaces.tip.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TipDto {
    private String id;
    private String title;
    private String link;
    private String image;
    private String writer;
}
