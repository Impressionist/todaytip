package com.todaytip.domain.tip;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TipService {

    @Autowired
    private TipRepository tipRepository;

    public Tip getTipByTitle(String title) {
        return tipRepository.findByTitle(title);
    }

    public void save(Tip tip) {
        tipRepository.save(tip);
    }

}
