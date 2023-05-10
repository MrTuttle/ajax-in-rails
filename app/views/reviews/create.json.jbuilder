# 2 scénarios
# si @review est enregistré
  # renvoyer une nouvelle forme qu'il puisse remplir
  #   json.my_form render(form html en partial)
  # envoyer la review qu'on veux injecter dans la page
# else
  # renvoyer la form avec les erreurs de validation
# end

if review.persisted?
  #json.my_form renderadresse partial, format a rendre, variables locales a passer (ici restaurant et une review vide)
  json.my_form render (partial: 'reviews/form', format: :html, locals: {restaurant: @restaurant, review: Review.new})
  json.my_inserted_item render(partial: 'restaurants/review', format: :html, locals: {review: @review})
else
  # même ligne que 12 mais au lieux de renvoyer Review.new, on renvois @review, cad la review avec ses erreurs de validation
  json.my_form render (partial: 'reviews/form', format: :html, locals: {restaurant: @restaurant, review: @review})
end
