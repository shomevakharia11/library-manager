package com.librarymanagementapp.repositories;

import com.librarymanagementapp.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepository extends MongoRepository<Book, String> {
}