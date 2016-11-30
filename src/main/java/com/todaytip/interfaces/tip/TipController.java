package com.todaytip.interfaces.tip;

import com.todaytip.domain.tip.Tip;
import com.todaytip.domain.tip.TipService;
import com.todaytip.interfaces.ApiV1Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController("/tip")
public class TipController extends ApiV1Controller {

    @Autowired
    private TipService tipService;

    @RequestMapping(method = RequestMethod.GET)
    public Tip getTipByTitle(String title) {
        return tipService.getTipByTitle(title);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Tip save(Tip tip) {
        tipService.save(tip);
        return tip;
    }
}
