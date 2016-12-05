package com.todaytip.domain.tip;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipService {

    @Autowired
    private TipRepository tipRepository;

    public List<Tip> getAll() {
        return tipRepository.findAll();
    }

    public Tip getTipByTitle(String title) {
        return tipRepository.findByTitle(title);
    }

    public Tip save(Tip tip) {
        return tipRepository.save(tip);
    }

}
