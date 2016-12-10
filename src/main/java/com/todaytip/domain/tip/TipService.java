package com.todaytip.domain.tip;

import com.todaytip.domain.opengraph.OpenGraph;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class TipService {

	@Autowired
	private TipRepository tipRepository;

	public List<Tip> getAll() {
		List<Tip> tips = tipRepository.findAll();
		tips.forEach(tip -> {
			try {
				tip.setImage(new OpenGraph(tip.getLink(), true).getContent("image"));
			} catch (Exception e) {
				log.warn("{} image og tag parsing fail", tip.getLink());
			}
		});
		return tips;
	}

	public Tip getTipByTitle(String title) {
		return tipRepository.findByTitle(title);
	}

	public Tip save(Tip tip) {
		return tipRepository.save(tip);
	}

}
