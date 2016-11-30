package com.todaytip.domain.tip;

import com.todaytip.domain.tag.Tag;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Tip {
    private String id;
    private String title;
    private String link;
    private String writer;
    private Long readCount;
    private Long likeCount;
    private List<Tag> tags;
}
