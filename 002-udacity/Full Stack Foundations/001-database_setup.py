import sys

from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
 
 Base = declarative_base()

 ######### insert at the end of file #########
 engine = create_engine('sqlite:///restaurantmenu.db')
 Base.metadata.create_all(engine)