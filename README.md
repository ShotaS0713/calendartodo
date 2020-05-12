# freemarket_sample_64d 清水案 db

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|birth_year|string|null: false|
|birth_month|string|null: false|
|birth_day|string	null: false|
|first_name|string|null: false|
|last_name|string|null: false|
|kana_first_name|string|null: false|
|kana_last_name|string|null: false|
|phone|integer|null: false, unique: true|
|deleted_at|datetime|null: false|

### Association
- 
- 
- 


## itemsテーブル
|Column|Type|Options|
|------|----|-------|


### Association
- 
- 
- 


## addressesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|number|string|null: false|
|prefecture|string|null: false|
|municipality|string|null: false|
|address|string|null: false|

### Association
- 
- 
- 



## categoriesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|ancestry|string||
### Association
- 
- 

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|username|string||
### Association
- 
- 
- 

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- 
- 

