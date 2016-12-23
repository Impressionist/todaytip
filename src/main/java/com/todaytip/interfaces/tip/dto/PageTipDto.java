package com.todaytip.interfaces.tip.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PageTipDto {
    private int totalPages;
    private long totalElement;
    private List<TipDto> contents;
}
