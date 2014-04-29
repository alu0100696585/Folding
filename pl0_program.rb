require 'data_mapper'
# full path!
DataMapper.setup(:default, 
                 ENV['DATABASE_URL'] || "sqlite3://#{Dir.pwd}/database.db")

class PL0program
  include DataMapper::Resource
  
  property :id, Serial
  property :name, String #Este atributo deja de ser clave.
  property :source, String, :length => 1..1024
  
  belongs_to :autor
end

class Autor
  include DataMapper::Resource
  
  property :user, String, :key => true
  has n, :Pl0programs
  
end

DataMapper.finalize
DataMapper.auto_upgrade!


