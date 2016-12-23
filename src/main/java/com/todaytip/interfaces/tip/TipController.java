package com.todaytip.interfaces.tip;

import com.todaytip.domain.tip.Tip;
import com.todaytip.domain.tip.TipService;
import com.todaytip.interfaces.tip.dto.PageTipDto;
import com.todaytip.interfaces.tip.dto.TipDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
public class TipController {

    private final TipService tipService;

    @Autowired
    public TipController(TipService tipService) {
        this.tipService = tipService;
    }

    @RequestMapping(value = "/api/tips", method = RequestMethod.GET)
    public PageTipDto getAll(int page) {
        PageTipDto pageTipDto = new PageTipDto();
        Page<Tip> tipPage = tipService.getAll(page);
        pageTipDto.setTotalPages(tipPage.getTotalPages());
        pageTipDto.setTotalElement(tipPage.getTotalElements());
        pageTipDto.setContents(tipPage.getContent().stream()
                .map(this::toTipDto)
                .collect(Collectors.toList()));

        return pageTipDto;
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
        tipDto.setWriter(tip.getWriter());
        tipDto.setImage(tip.getImage());
        return tipDto;
    }

    private Tip toTip(TipDto tipDto) {
        Tip tip = new Tip();
        tip.setId(tipDto.getId());
        tip.setTitle(tipDto.getTitle());
        tip.setLink(tipDto.getLink());
        tip.setWriter(tipDto.getWriter());
        return tip;
    }
}
