package com.todaytip.domain.tip;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface TipRepository extends PagingAndSortingRepository<Tip, String> {
    Tip findByTitle(String title);
}
