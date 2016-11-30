package com.todaytip.domain.tip;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TipRepository extends MongoRepository<Tip, String> {
    Tip findByTitle(String title);
}
