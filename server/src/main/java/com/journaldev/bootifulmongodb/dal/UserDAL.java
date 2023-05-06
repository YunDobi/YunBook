package com.journaldev.bootifulmongodb.dal;

import com.journaldev.bootifulmongodb.model.User;

import java.util.List;

public interface UserDAL {
    List<User> getAllUsers();
}
