package com.todaytip.interfaces.tip;

import com.todaytip.domain.tip.Tip;
import com.todaytip.domain.tip.TipService;
import com.todaytip.interfaces.tip.dto.TipDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class TipController {

    private final TipService tipService;

    @Autowired
    public TipController(TipService tipService) {
        this.tipService = tipService;
    }

    @RequestMapping(value = "/api/tips", method = RequestMethod.GET)
    public List<TipDto> getAll() {
        return tipService.getAll().stream()
            .map(this::toTipDto)
            .collect(Collectors.toList());

    }

    @RequestMapping(value = "/api/tips", method = RequestMethod.POST)
    public void save(@RequestBody TipDto tipDto) {
        tipService.save(toTip(tipDto));
    }

    private TipDto toTipDto(Tip tip) {
        TipDto tipDto = new TipDto();
        tipDto.setId(tip.getId());
        tipDto.setTitle(tip.getTitle());
        tipDto.setLink(tip.getLink());
        tipDto.setImage(tip.getImage());
        tipDto.setLikeCount(tip.getLikeCount());
        tipDto.setReadCount(tip.getReadCount());
        return tipDto;
    }

    private Tip toTip(TipDto tipDto) {
        Tip tip = new Tip();
        tip.setId(tipDto.getId());
        tip.setTitle(tipDto.getTitle());
        tip.setLink(tipDto.getLink());
        tip.setWriter(tipDto.getWriter());
        tip.setReadCount(tipDto.getReadCount());
        tip.setLikeCount(tipDto.getLikeCount());
        return tip;
    }
}
