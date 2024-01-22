class AirlineBlueprint < Blueprinter::Base
  identifier :id
  
  fields :name, :image_url, :slug
  association :reviews, blueprint: ReviewBlueprint
end