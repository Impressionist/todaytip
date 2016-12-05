package com.todaytip.interfaces.tip;

import com.todaytip.domain.tip.Tip;
import com.todaytip.domain.tip.TipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TipController {

    private final TipService tipService;

    @Autowired
    public TipController(TipService tipService) {
        this.tipService = tipService;
    }

    @RequestMapping(value = "/api/tips", method = RequestMethod.GET)
    public List<Tip> getAll() {
        return tipService.getAll();
    }

    @RequestMapping(value = "/api/tips", method = RequestMethod.POST)
    public Tip save(Tip tip) {
        return tipService.save(tip);
    }
}
