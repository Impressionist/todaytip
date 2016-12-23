package com.todaytip.domain.tip;

import com.todaytip.domain.opengraph.OpenGraph;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;

@Slf4j
@Service
public class TipService {

    private static final int PAGE_SIZE = 10;

    private final TipRepository tipRepository;

    @Autowired
    public TipService(TipRepository tipRepository) {
        this.tipRepository = tipRepository;
    }

    public Page<Tip> getAll(int page) {
        return tipRepository.findAll(new PageRequest(page, PAGE_SIZE, Sort.Direction.DESC, "createdAt"));
    }

    public Tip getTipByTitle(String title) {
        return tipRepository.findByTitle(title);
    }

    public Tip save(Tip tip) {
        try {
            tip.setCreatedAt(new Date());
            tip.setImage(new OpenGraph(tip.getLink(), true).getContent("image"));
        } catch (Exception e) {
            log.warn("{} image og tag parsing fail", tip.getLink());
        }
        return tipRepository.save(tip);
    }

}
