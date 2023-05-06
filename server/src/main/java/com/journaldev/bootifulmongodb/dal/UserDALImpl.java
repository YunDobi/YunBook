package com.journaldev.bootifulmongodb.dal;

import com.journaldev.bootifulmongodb.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.List;

public class UserDALImpl implements UserDAL{

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<User> getAllUsers() {
        return mongoTemplate.findAll(User.class);
    }
}
